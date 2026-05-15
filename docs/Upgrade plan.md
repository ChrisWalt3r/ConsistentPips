ConsistentPips Upgrade Implementation Brief
1. Project Vision

ConsistentPips should evolve from a normal trading journal into a complete trader performance and prop-account management platform.

The product should help traders:

journal trades accurately,
improve consistency and discipline,
track prop-firm progress,
reduce avoidable challenge failures,
manage funded accounts safely,
automate trade imports,
and receive meaningful performance insights over time.

The experience should feel like a serious professional trading tool built for traders who care about discipline, psychology, risk management, and long-term improvement.

2. Core Account Structure

The platform should support only two account types.

A. Live Account

A live account represents a trader’s personal trading account.

This account type should focus on:

performance tracking,
equity growth,
trade review,
consistency,
psychology,
and journaling.

The live account experience should prioritize trading performance and improvement rather than prop-firm rule enforcement.

B. Prop Firm Account

A prop firm account represents any challenge, evaluation, verification, or funded account related to a prop firm.

This account type should support:

prop-firm rule monitoring,
evaluation tracking,
challenge phase tracking,
funded-account management,
drawdown protection,
and discipline analysis.
3. Funded Status Under Prop Firm Accounts

“Funded” should not be a separate account type.

Instead, funded should exist as a status inside a prop firm account.

This means:

the user creates
in prop firms, also add the ability to add phases and their targets. give me the new full document.
Thought for a couple of seconds
ConsistentPips Upgrade Implementation Brief
1. Project Vision

ConsistentPips should evolve from a trading journal into a complete trader performance and prop-account management platform.

The product should help traders:

journal trades accurately,
improve consistency and discipline,
track prop-firm progress,
reduce avoidable challenge failures,
manage funded accounts safely,
automate trade imports,
and receive useful performance insights over time.

The experience should feel like a serious professional trading tool built for traders who care about discipline, risk management, psychology, and long-term improvement.

2. Core Account Structure

The platform should support only two account types.

A. Live Account

A live account represents a trader’s personal trading account.

This account type should focus on:

performance tracking,
equity growth,
trade review,
consistency,
journaling,
and psychology.

The live account experience should prioritize trading performance and improvement rather than prop-firm rules.

B. Prop Firm Account

A prop firm account represents any account connected to a prop challenge, evaluation, verification, or funded prop journey.

This account type should support:

prop-firm rule monitoring,
phase tracking,
evaluation tracking,
funded-account management,
drawdown protection,
and discipline analysis.
3. Funded Status Under Prop Firm Accounts

“Funded” should not be a separate account type.

Instead, funded should exist as a status inside a prop firm account.

This means:

the user creates a prop firm account,
the account starts as a challenge or evaluation account,
once the user passes the required stages, the account can be marked as Funded,
even if some intermediate phases were not recorded in detail.

The platform should support this simple workflow without forcing the user to log every historical step perfectly.

4. Prop Firm Phases and Targets

Prop firm accounts must support custom phases with targets.

This is important because different prop firms structure their evaluations differently, and the app should allow the user to mirror that journey inside ConsistentPips.

4.1 What a Phase Is

A phase represents one step in a prop-firm journey.

Examples of phases may include:

Challenge Phase 1,
Challenge Phase 2,
Verification,
Assessment,
Funded,
or any other user-defined stage.
4.2 What Each Phase Should Track

Each phase should allow the user to define its own targets and requirements.

Common phase targets may include:

profit target,
maximum drawdown,
daily drawdown,
minimum trading days,
maximum trading days,
consistency requirement,
required pass conditions,
and optional notes.
4.3 Phase Progress Tracking

For each phase, the dashboard should show:

current progress toward target,
remaining amount to target,
safe zone,
warning zone,
danger zone,
and completion state.

The user should instantly know whether they are:

still in progress,
close to passing,
at risk of failing,
or already complete.
4.4 Phase Flexibility

The app should allow phases to be created and adjusted by the user, because prop firms differ in structure.

The product should support:

adding phases,
editing phases,
deleting phases,
reordering phases if needed,
and assigning targets per phase.
4.5 Funded as the Final Mode

Once all intended phases are completed, the user can switch the prop firm account into Funded mode.

This should update the dashboard behavior so the account is treated as a funded account rather than an active challenge.

5. Main Product Goals

The upgraded system should do six major things:

manage live and prop firm accounts clearly,
support prop-firm phases and their targets,
track prop rules and warnings in real time,
show evaluation and funded progress in dedicated dashboards,
automatically journal trades through brokerage sync,
support subscriptions and payments through Pesapal,
support affiliate and referral growth tracking,
send notifications and scheduled reports,
provide a polished, professional interface with room for AI insights later.
6. Prop Firm Rule Engine & Guardrails

This should be one of the most important parts of the product.

6.1 Purpose

The app should act like a risk cop for prop accounts. It should help traders avoid rule violations before they happen.

6.2 Rule Profiles

Each prop firm account should have one or more rule profiles. A rule profile should define the active prop-firm restrictions for that account.

A rule profile may include:

daily loss limit,
max total loss,
max lot size,
max open trades,
trading window,
news restrictions,
weekend restrictions,
instrument restrictions,
and any other challenge or funded-account rule that matters.
6.3 Real-Time Monitoring

The app should monitor account activity and show the trader how close they are to breaking a rule.

The UI should show:

daily loss progress,
total drawdown progress,
open trade count,
lot size exposure,
time-based restrictions,
and rule risk warnings.
6.4 Warning Logic

The app should use clear visual warning thresholds.

Examples:

warning at around 70% of daily loss usage,
stronger warning at around 90%,
clear danger state when the next losing trade may break the rule.

A message like the following should be displayed when relevant:

“If this trade loses, you will break your daily drawdown limit.”

6.5 Rule Adherence Score

Each trading day should receive a discipline score.

That score should reflect whether the user:

respected the daily loss limit,
stayed within lot size limits,
avoided overtrading,
traded only during allowed hours,
respected news restrictions,
and followed the account plan.
6.6 Discipline Timeline

The app should show a discipline history over time, including:

daily scores,
weekly trends,
monthly trends,
rule violations,
and correlation between rule adherence and profitability.

This should help users understand whether bad outcomes come from poor strategy, poor risk behavior, or both.

6.7 Trading Rules and Strategies

The app should also support user-defined trading rules and strategy tracking.

This should allow traders to define:

personal entry rules,
setup filters,
session rules,
strategy tags,
strategy notes,
and performance tracking by strategy.

This layer should help traders identify which approaches fit their account style and which ones should be avoided.

7. Evaluation and Funding Dashboards

The app should include specialized dashboards for prop traders.

7.1 Evaluation Dashboard

For a prop firm account that is still in a challenge or evaluation stage, the dashboard should show:

current phase,
phase targets,
profit target,
current profit,
total drawdown used,
drawdown remaining,
minimum trading days,
completed trading days,
days remaining,
and current pass/fail risk.

It should also clearly mark:

safe zones,
warning zones,
and danger zones.
7.2 Funded Dashboard

Once a prop firm account is marked as Funded, the dashboard should change to show funded-account priorities.

It should display:

monthly reset countdown,
payout schedule or payout eligibility,
growth milestones,
rule safety,
risk exposure,
and account retention status.

The goal is to help users protect the account they worked hard to get.

7.3 Phase Dashboard Behavior

Because phases are now supported, the prop dashboard should display the current phase clearly and show its targets in context.

For example:

Phase 1 progress
Phase 2 progress
Verification progress
Funded status

The user should see which phase is active, what the target is, and how much progress remains.

8. Automatic Journaling with SnapTrade

The app should support automatic journaling through SnapTrade.

8.1 Purpose

Many traders stop journaling because manual entry is slow and annoying. SnapTrade integration should remove that friction by importing brokerage trades automatically.

8.2 What the integration should do

Once connected, the app should:

link to the user’s brokerage account,
pull trade and account activity,
import trade data into the journal,
avoid duplicate imports,
and keep the journal updated automatically.
8.3 User Experience

The experience should be simple:

user connects brokerage account,
sync begins,
trades appear in the journal,
the user can review or edit them,
and journaling stays updated with minimal manual work.
8.4 Sync Behavior

The sync system should support:

initial import,
periodic refresh,
manual refresh,
and sync status visibility.

The user should always be able to see whether the brokerage connection is:

connected,
syncing,
synced,
failed,
or needs attention.
9. Subscriptions and Pesapal Payments

The app should include a subscription system using Pesapal so users can pay with:

MTN Mobile Money,
Airtel Money,
and card payments.
9.1 Purpose

The billing system should support monetization while keeping payment methods familiar and accessible to users in the region.

9.2 Subscription Plans

The product should support plan-based access. For example:

Free
Pro
Premium or future advanced tier

The exact plan names can be adjusted, but the structure should support controlled feature access.

9.3 Billing Features

The billing system should support:

checkout flow,
payment confirmation,
subscription activation,
renewal tracking,
expiry handling,
failed payment handling,
upgrade and downgrade logic,
and plan-based feature restrictions.
9.4 Access Control

Certain features should be available only on higher plans, such as:

unlimited accounts,
prop rule automation,
AI insights,
advanced analytics,
and future community features.

9.5 Affiliate Program

The product should support an affiliate or referral system so partners can help grow ConsistentPips.

The affiliate system should support:

referral links or codes,
referral attribution,
commission tracking,
payout tracking,
affiliate performance reporting,
and partner onboarding.
10. Landing Page

A full landing page should be added to make ConsistentPips easier to market and easier to understand.

10.1 Purpose

The landing page should explain what the app does and why it matters.

10.2 Landing Page Sections

The page should include:

hero section,
product value proposition,
feature highlights,
screenshots or product visuals,
prop trading use cases,
pricing section,
FAQ section,
and strong call-to-action buttons.
10.3 Messaging

The landing page should communicate that ConsistentPips helps traders:

stay disciplined,
pass evaluations,
protect funded accounts,
track trades properly,
and improve consistency.

The wording should feel professional and premium.

11. UI and Interface Improvements

The interface should be redesigned to feel more polished and trustworthy.

11.1 Overall Feel

The app should feel like a modern trading platform, not a simple dashboard or spreadsheet replacement.

It should communicate:

clarity,
confidence,
precision,
professionalism,
and trust.
11.2 UI Improvements

The design should include:

cleaner spacing,
more modern cards,
stronger typography,
clearer hierarchy,
better use of color,
polished buttons,
improved form layouts,
and responsive design for desktop and mobile.
11.3 Dashboard Layout

The dashboard should prioritize the most important information first.

Recommended top sections:

account summary,
account type/status,
current phase and phase target progress,
risk and drawdown indicators,
recent trades,
performance charts,
discipline score,
alerts,
and AI insight placeholders.
11.4 Better User Flow

The app should feel easier to use with:

clear navigation,
fewer confusing screens,
cleaner forms,
better empty states,
better loading states,
and better success/error messages.

11.5 Analytics and Reporting

The product should emphasize analytics instead of execution review screens.

This area should show:

performance analytics,
trade quality trends,
strategy comparisons,
discipline patterns,
and coaching-style insights.

The app should also send notifications with weekly and monthly reports so traders can review progress without opening the app every day.

These reports should summarize:

profitability,
discipline score,
rule violations,
account risk,
strategy performance,
and notable changes from the previous period.
12. AI Insights and What-If Analysis

AI should be added later, after the app has enough useful data.

12.1 Purpose

The AI layer should help users understand why they are improving or failing, especially in relation to prop rules and discipline.

12.2 AI Coach

The AI should be able to summarize:

weekly performance,
monthly performance,
rule adherence,
biggest mistakes,
strongest trading periods,
and likely reasons for failure.

Example insight:

“You risked too aggressively on too many trades. This is increasing your chance of failing prop evaluations.”

12.3 What-If Analysis

The app should show how results may have changed under better discipline.

Examples:

what if every trade had been smaller risk,
what if only the best session was traded,
what if no trades were taken during news,
what if fewer trades were taken per day.

This should help users see the cost of bad habits.

13. Recommended Data Model Direction

The database should support the new structure cleanly.

13.1 Accounts

Each account should store:

account type,
account status,
optional phase or stage,
starting balance,
current balance,
linked rule profile if applicable,
and sync or billing relationships if needed.
13.2 Prop Firm Phases

Prop firm accounts should support a phase structure where each phase can store:

phase name,
phase order,
phase status,
targets,
notes,
and current progress.

Each phase target may include:

profit target,
max drawdown,
daily drawdown,
minimum trading days,
maximum trading days,
and consistency requirements.
13.3 Rule Profiles

Each prop account can have one or more rule profiles.

A rule profile should store:

name,
linked account,
loss limits,
drawdown limits,
trade limits,
time restrictions,
news restrictions,
and other challenge or funded rules.
13.4 Rule Violations

The system should store historical rule breaks and warnings so users can review them later.

Each violation record should include:

account reference,
violated rule,
severity,
time,
and details about what happened.
13.5 Discipline Scores

The app should store daily discipline data for timeline charts and analytics.

13.6 Brokerage Connections

The app should store connection records for brokerage sync so each user can reconnect or refresh safely.

13.7 Subscriptions

Subscription data should be stored so plan status, expiry, and payment provider data can be tracked reliably.

13.8 Trading Rules and Strategies

The database should also support trading rules and strategies so the app can analyze how the trader actually operates.

Trading rule records should store:

rule name,
account reference,
time restrictions,
session restrictions,
setup filters,
and notes.

Strategy records should store:

strategy name,
strategy type,
allowed instruments,
preferred sessions,
risk profile,
and performance statistics.

14. Backend and Service Expectations

The backend should be organized into clear responsibilities.

Rule evaluation service

A service should evaluate incoming trade activity against the active rule profile.

It should determine:

whether the trade is safe,
whether a warning should be shown,
whether a rule is close to being broken,
and whether a violation should be logged.
Trade sync service

A service should convert brokerage data into internal journal records and prevent duplicate imports.

Discipline scoring job

A scheduled process should calculate daily discipline scores and save them for later charting.

Billing service

A billing layer should manage checkout, payment confirmation, and subscription status.

Insight pipeline

A future analytics layer should collect data in a way that makes AI and what-if analysis possible later.

15. Security and Reliability

The implementation should be safe and stable.

The developer should ensure:

secrets are stored securely,
webhooks are verified,
duplicate syncs are prevented,
account state is not corrupted,
and payment status is handled carefully.

External integrations should include:

error handling,
retry logic where appropriate,
and visible failure states in the UI.
16. Testing Expectations

The implementation should be tested thoroughly.

The app should be tested for:

live account creation,
prop account creation,
funded status selection under prop accounts,
phase creation and phase target setup,
rule profile creation,
evaluation dashboard accuracy,
funded dashboard accuracy,
trade import and duplicate prevention,
billing and subscription activation,
and responsive UI behavior.

Manual QA should include:

creating each account type,
adding multiple prop phases,
assigning targets to each phase,
simulating prop rule limits,
importing brokerage trades,
moving a prop account into funded status,
and checking the landing page and pricing flow.
17. Suggested Build Order

A practical implementation order is:

core account structure and UI switching,
prop firm phases and phase targets,
prop rule profiles and rule monitoring,
evaluation and funded dashboards,
brokerage sync and automatic journaling,
billing and landing page,
AI insights and what-if analysis,
UI polish and final refinement.

This order allows the product to become usable early while the deeper features are still being built.

18. Final Product Outcome

After this upgrade, ConsistentPips should support:

only two account types: live and prop firm,
funded status under the prop firm account,
configurable prop phases with targets,
prop rule profiles and alerts,
challenge and funded dashboards,
automatic trade journaling,
Pesapal subscriptions,
a polished landing page,
and a professional interface that traders trust.

The platform should feel like a real trading operations tool built for consistency, funding success, and long-term growth.