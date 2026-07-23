import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack, IoCheckmarkCircle, IoLayersOutline } from 'react-icons/io5';
import PageHeader from '../components/PageHeader.jsx';
import LoadingScreen from '../components/LoadingScreen.jsx';
import EmptyState from '../components/EmptyState.jsx';
import { useAccount } from '../context/AccountContext.jsx';
import { journalAPI } from '../services/api.js';
import { BUNDLE_SIZE, computeBundles } from '../utils/bundles.js';
import { formatTradeDateTitle } from '../utils/tradeDates.js';

export default function BundlesPage() {
  const navigate = useNavigate();
  const { currentAccount } = useAccount();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllEntries = async () => {
      if (!currentAccount) {
        setEntries([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const allEntries = [];
        let page = 1;
        let totalPages = 1;

        do {
          const response = await journalAPI.getEntries(page, 100, '', currentAccount.id);
          allEntries.push(...(response.entries || []));
          totalPages = response.pagination?.pages || 1;
          page += 1;
        } while (page <= totalPages);

        setEntries(allEntries);
      } catch (error) {
        console.error('Failed to load bundle data', error);
        window.alert('Failed to load bundle data.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllEntries();
  }, [currentAccount]);

  const { completedBundles, currentBundleTrades } = useMemo(
    () => computeBundles(entries),
    [entries]
  );

  if (loading) {
    return <LoadingScreen message="Loading bundles..." compact />;
  }

  if (!currentAccount) {
    return (
      <div className="page">
        <PageHeader
          eyebrow="Bundles"
          title="Rule-Compliance Bundles"
          subtitle="Activate an account to track your rule-following streaks."
        />
        <EmptyState
          title="No active account"
          description="Select an account in settings first, then revisit this page."
        />
      </div>
    );
  }

  const reversedBundles = [...completedBundles].reverse();

  return (
    <div className="page">
      <PageHeader
        eyebrow="Bundles"
        title="Rule-Compliance Bundles"
        subtitle="Every 20 trades in a row where you followed your plan forms one bundle."
        actions={
          <button type="button" className="ghost-button" onClick={() => navigate(-1)}>
            <IoArrowBack size={18} />
            Back
          </button>
        }
      />

      <section className="dashboard-hero">
        <article className="hero-card hero-card--primary">
          <div className="hero-card__icon">
            <IoLayersOutline size={24} />
          </div>
          <span>Current Bundle</span>
          <strong>
            {currentBundleTrades.length}/{BUNDLE_SIZE}
          </strong>
          <p>Trades followed in a row since the last reset.</p>
        </article>

        <article className="hero-card hero-card--success">
          <div className="hero-card__icon">
            <IoCheckmarkCircle size={24} />
          </div>
          <span>Completed Bundles</span>
          <strong>{completedBundles.length}</strong>
          <p>Full 20-trade bundles recorded on this account.</p>
        </article>
      </section>

      <section className="surface-card">
        <div className="section-heading">
          <div>
            <span className="section-heading__eyebrow">History</span>
            <h2>Completed bundles</h2>
            <p className="chart-panel__subtitle">
              Bundle #1 is your earliest completed streak of {BUNDLE_SIZE} rule-followed trades.
            </p>
          </div>
        </div>

        {reversedBundles.length > 0 ? (
          <ul className="bundle-list">
            {reversedBundles.map((bundle, index) => {
              const bundleNumber = reversedBundles.length - index;
              return (
                <li key={`${bundle.startDate.toISOString()}-${bundle.endDate.toISOString()}`} className="bundle-list__item">
                  <div className="bundle-list__badge">#{bundleNumber}</div>
                  <div className="bundle-list__details">
                    <strong>Bundle {bundleNumber}</strong>
                    <span>
                      {formatTradeDateTitle(bundle.startDate)} &rarr; {formatTradeDateTitle(bundle.endDate)}
                    </span>
                  </div>
                  <div className="bundle-list__count">{BUNDLE_SIZE}/{BUNDLE_SIZE}</div>
                </li>
              );
            })}
          </ul>
        ) : (
          <EmptyState
            title="No completed bundles yet"
            description="Keep following your rules — your first bundle will appear here once you hit 20 in a row."
          />
        )}
      </section>
    </div>
  );
}
