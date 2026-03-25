# Revenue Model — Version 3

**Date:** 2026-03-22
**Status:** Brainstorming / Open for Discussion
**Builds on:** V1 `04-roles-permissions-revenue-mvp.md` (revenue section)

---

## Overview

V1 revenue model was simple: **Academy pays monthly subscription.** That's one revenue stream tied to one customer type (academy owner).

V3 introduces **8 revenue streams** across B2B (academy) and B2C (student/parent) — making revenue more diversified, more resilient, and faster-growing.

---

## 1. Revenue Stream Comparison

### V1 Model (Current)

```
Revenue = Number of Academies x Subscription Fee

Example (Year 2, 2000 academies):
  Free: 1,200 (Rs 0)
  Pro: 600 x Rs 2,999/month = Rs 18L/month
  Elite: 200 x Rs 7,999/month = Rs 16L/month
  TOTAL: Rs 34L/month

PROBLEM:
- Revenue scales ONLY with academy count
- Student engagement doesn't affect revenue
- If academy owner doesn't see value -> churn
- No per-student revenue
- Platform creates ALL content (expensive)
```

### V3 Model (Proposed)

```
Revenue = Academy Subscriptions
        + Student Premium
        + Content Marketplace Commission
        + Video Storage Upsell
        + Sponsored Challenges
        + Certifications
        + Parent Premium
        + B2B Data Access

= MULTIPLE revenue streams growing independently
```

---

## 2. All 8 Revenue Streams

### Stream 1: Academy Subscription (Existing — Enhanced)

**Same as V1 but with LOWER CHURN due to engagement features.**

| Tier | Price | Target |
|------|-------|--------|
| Free (Starter) | Rs 0 | Up to 30 students, basic features |
| Pro | Rs 2,999/month | 30-100 students, full features |
| Elite | Rs 7,999/month | 100+ students, AI, multi-branch |

**What changes in V3:**
- Academies upgrade to Elite faster because Elite-only student features (AI video, showcase profiles) become selling points to parents
- Churn drops from ~8% to ~2% because students are engaged daily — parents see value — academy keeps paying
- More academies sign up because public profiles and reviews drive organic growth

**V3 Impact:**

| Metric | V1 | V3 |
|--------|----|----|
| Monthly churn | ~8% | ~2% |
| Free-to-Pro conversion | 10% | 20% (engagement proves value) |
| Pro-to-Elite upgrade | 5% | 15% (parents demand Elite features) |

**Projected (Year 2, 2000 academies):**

| | V1 | V3 |
|---|---|---|
| Free | 1,200 | 1,000 |
| Pro | 600 | 700 |
| Elite | 200 | 300 |
| Monthly revenue | Rs 34L | Rs 45L |

---

### Stream 2: Student Premium Subscription (NEW)

**"Student Pro" — a per-student subscription that parents pay directly to the platform.**

| Feature | Free Student | Student Pro (Rs 149/month) |
|---------|:------------:|:--------------------------:|
| Basic progress dashboard | Yes | Yes |
| Daily quiz (5 questions) | Yes | Yes |
| Home practice (coach assigned) | Yes | Yes |
| XP & leaderboard | Yes | Yes |
| Interactive lessons | 1 free | Unlimited |
| Video uploads for coach review | 3/week | Unlimited |
| AI technique feedback on videos | No | Yes |
| Advanced peer comparison (cross-platform) | No | Yes |
| Video progress diary (side-by-side) | 2 clips/month | Unlimited |
| Premium quizzes & challenges | No | Yes |
| Custom profile themes | No | Yes |
| Priority support | No | Yes |
| Ad-free experience | No | Yes |

**Pricing Options:**

| Plan | Price | Discount |
|------|-------|----------|
| Monthly | Rs 149/month | — |
| Quarterly | Rs 399/quarter | 11% off |
| Annual | Rs 1,499/year | 16% off |

**Who pays:** Parent pays directly through the app. This is SEPARATE from academy fee.

**Academy's role:** Academy doesn't earn from this. But academy benefits because Student Pro students are more engaged = better results = better academy reputation.

**Projected:**
- Year 2: 2,000 academies x ~25 students avg = 50,000 students
- Student Pro conversion: 10% = 5,000 subscribers
- Revenue: 5,000 x Rs 149 = Rs 7.45L/month

---

### Stream 3: Content Marketplace Commission (NEW)

**Coaches create content. Students (from ANY academy) purchase it. Platform takes 30%.**

| Content Type | Price Range | Platform Commission |
|-------------|------------|:-------------------:|
| Technique video | Rs 5-25/view | 30% |
| Drill card | Rs 5-10 | 30% |
| Article | Rs 5-15 | 30% |
| Quiz set | Rs 10-25/attempt | 30% |
| Full course (5-10 lessons) | Rs 99-499 | 30% |

**How it works:**
1. Coach creates content in Coach Content Studio
2. Platform reviews for quality and accuracy
3. Content listed on marketplace (accessible to ALL platform students)
4. Students purchase with parent's payment method
5. Revenue split: 70% to coach, 30% to platform

**Projected:**
- Year 2: 200 active content-creating coaches
- Avg earnings per coach: Rs 3,000/month
- Total marketplace volume: Rs 6L/month
- Platform commission (30%): Rs 1.8L/month

---

### Stream 4: Video Storage Upsell (NEW)

**Engagement features (home practice videos, video diary, coach uploads) consume storage. Free tier has limits.**

| Tier | Storage Included | Overage |
|------|-----------------|---------|
| Free academy | 5 GB | Cannot upload beyond limit |
| Pro academy | 50 GB | Rs 499/month per extra 50 GB |
| Elite academy | 200 GB | Rs 499/month per extra 100 GB |

**What consumes storage:**
- Student home practice video uploads
- Coach session recordings
- Video progress diary clips
- Match recordings
- Content marketplace uploads

**Projected:**
- Year 2: 200 academies needing extra storage
- Avg extra packs: 1.5 per academy
- Revenue: 200 x 1.5 x Rs 499 = Rs 1.5L/month

---

### Stream 5: Sponsored Challenges (NEW)

**Cricket brands sponsor monthly challenges visible to all platform students.**

| Example | Sponsor | Prize | Platform Fee |
|---------|---------|-------|-------------|
| "MRF Cover Drive Challenge" | MRF Bats | MRF bat for winner | Rs 75K |
| "SG Bowling Challenge" | SG Cricket | SG ball set | Rs 50K |
| "Puma Fitness Challenge" | Puma Sports | Sports shoes | Rs 1L |
| "Dream11 Cricket Quiz Month" | Dream11 | Cash prize via Dream11 | Rs 2L |

**How it works:**
1. Super Admin partners with cricket brand
2. Brand defines challenge (e.g., "Score 90%+ on Cover Drive")
3. Challenge appears for all Elite students on platform
4. Students participate, leaderboard tracks results
5. Winner gets prize (shipped by brand)
6. Brand gets visibility to 50,000+ cricket students and parents

**Value proposition for brands:**
- Direct access to cricket-obsessed audience (students + parents)
- Engaged audience (not passive — actively participating)
- Brand association with skill development (positive image)
- Data: "5,000 students participated in your challenge"

**Projected:**
- Year 2: 4 sponsored challenges per month
- Avg sponsorship: Rs 75K per challenge
- Revenue: 4 x Rs 75K = Rs 3L/month

---

### Stream 6: Standardized Certifications (NEW)

**"Soruban Certified Stage X [Skill]" — a platform-level certification that has standardized assessment criteria across all academies.**

| Certification | Assessment | Fee | Value |
|--------------|-----------|-----|-------|
| Soruban Certified Stage 4 Batsman | Standardized batting assessment (20 skills) | Rs 499 | Recognized across all platform academies |
| Soruban Certified Stage 5 All-Rounder | Full skill assessment (batting + bowling + fielding) | Rs 799 | Selection trial credential |
| Soruban Junior Coach | Coaching knowledge + mentoring record | Rs 999 | Can assist at any platform academy |
| Soruban Fitness Badge | Standardized fitness test | Rs 299 | Age-appropriate benchmarks |

**Why it's valuable:**
- Academy certificates are only recognized at THAT academy
- Soruban certification is recognized ACROSS the platform
- When a student transfers academies, the certification is portable
- Selection committees can look for "Soruban Certified" players
- Creates a standard for cricket skill levels (like IELTS for English)

**How it works:**
1. Student reaches eligibility requirements in app
2. Pays certification fee
3. Assessment conducted by certified assessor (could be the academy coach with platform oversight)
4. Results verified by platform (video evidence required)
5. Certificate issued with QR code for verification
6. Certificate displayed on Showcase Profile

**Re-certification:**
- Certifications expire after 12 months
- Must re-certify to maintain (prevents stale certifications)
- Re-certification fee: 50% of original

**Projected:**
- Year 2: 500 certifications per month
- Avg fee: Rs 500
- Revenue: 500 x Rs 500 = Rs 2.5L/month

---

### Stream 7: Parent Premium (NEW)

**"Parent Plus" — optional premium features for parents who want deeper visibility.**

| Feature | Free Parent | Parent Plus (Rs 49/month) |
|---------|:----------:|:-------------------------:|
| Basic progress notifications | Yes | Yes |
| Daily attendance notification | Yes | Yes |
| Monthly skill summary | Yes | Yes |
| AI-generated monthly report | No | Yes |
| Video highlights reel of child | No | Yes |
| Benchmark comparison with percentiles | No | Yes |
| Direct coach messaging | No | Yes |
| Download progress reports as PDF | No | Yes |
| Historical comparison (month-over-month charts) | Basic | Detailed |
| Nutrition & fitness recommendations | No | Yes |

**Pricing:**
- Rs 49/month per child
- Rs 99/month for 2+ children (family plan)

**Projected:**
- Year 2: 50,000 students -> ~40,000 parent accounts
- Parent Plus conversion: 5% = 2,000 subscribers
- Revenue: 2,000 x Rs 49 = Rs 0.98L/month (~Rs 1L)

---

### Stream 8: B2B Data Access (Future — Phase 3)

**Anonymized talent data sold to cricket organizations. Requires scale and trust.**

| Buyer | Use Case | Pricing |
|-------|----------|---------|
| IPL Franchises | Scout talent: "Stage 6+ left-arm spinners under 16 in TN" | Rs 2-5L/year |
| State Cricket Boards | Identify talent for selection trials | Rs 1-3L/year |
| Cricket Equipment Brands | Market research: what skills are trending, age demographics | Rs 50K-1L/year |
| Sports Science Researchers | Anonymized performance data for research | Rs 25K-50K/year |
| Sports Academies (non-cricket) | Benchmark their systems against cricket model | Rs 25K/year |

**Privacy rules:**
- ALL data is anonymized — no student names or personal info
- Academy-level data shared only with academy's consent
- Student-level data requires parent opt-in
- Compliant with Indian data protection regulations

**Projected:**
- Year 3: 10-20 organizations
- Avg subscription: Rs 1.5L/year
- Revenue: Rs 15-30L/year (Rs 1.25-2.5L/month)

---

## 3. Total Revenue Projection

### Year 2 Comparison (2,000 Academies)

| Stream | V1 Revenue | V3 Revenue | Growth |
|--------|-----------|-----------|--------|
| Academy Subscriptions | Rs 34L | Rs 45L | +32% (lower churn, more upgrades) |
| Student Premium | Rs 0 | Rs 7.45L | NEW |
| Content Marketplace (30%) | Rs 0 | Rs 1.8L | NEW |
| Video Storage Upsell | Rs 0 | Rs 1.5L | NEW |
| Sponsored Challenges | Rs 0 | Rs 3L | NEW |
| Certifications | Rs 0 | Rs 2.5L | NEW |
| Parent Premium | Rs 0 | Rs 1L | NEW |
| B2B Data Access | Rs 0 | Rs 0 (Phase 3) | Future |
| **TOTAL MONTHLY** | **Rs 34L** | **Rs 62.25L** | **+83%** |
| **TOTAL ANNUAL** | **Rs 4.08 Cr** | **Rs 7.47 Cr** | **+83%** |

### Year 3 Projection (5,000 Academies)

| Stream | Revenue |
|--------|---------|
| Academy Subscriptions | Rs 1.10 Cr/month |
| Student Premium | Rs 18.6L/month |
| Content Marketplace | Rs 4.5L/month |
| Video Storage | Rs 3.75L/month |
| Sponsored Challenges | Rs 5L/month |
| Certifications | Rs 6.25L/month |
| Parent Premium | Rs 2.45L/month |
| B2B Data Access | Rs 2.5L/month |
| **TOTAL MONTHLY** | **Rs 1.53 Cr** |
| **TOTAL ANNUAL** | **Rs 18.36 Cr** |

---

## 4. The Flywheel Effect

```
                    +--------------------+
                    |  More Students     |
                    |  use app daily     |
                    +--------+-----------+
                             |
                    +--------v-----------+
                    |  More data &       |
                    |  content created   |
                    +--------+-----------+
                             |
          +------------------v------------------+
          |                                      |
    +-----v------+                        +------v-----+
    |  Coaches   |                        |  Parents   |
    |  create    |                        |  see daily |
    |  content   |                        |  progress  |
    |  (earn Rs) |                        |  & engage  |
    +-----+------+                        +------+-----+
          |                                      |
    +-----v------+                        +------v-----+
    |  Platform  |                        |  Parents   |
    |  has MORE  |                        |  NEVER     |
    |  content   |                        |  cancel    |
    +-----+------+                        |  academy   |
          |                               |  fees      |
          |                               +------+-----+
          +------------------+-------------------+
                             |
                   +---------v---------+
                   |  Academy KEEPS    |
                   |  subscription     |
                   |  & UPGRADES tier  |
                   |  (low churn)      |
                   +---------+---------+
                             |
                   +---------v---------+
                   |  Super Admin      |
                   |  REVENUE GROWS    |
                   |  per academy +    |
                   |  per student +    |
                   |  per content      |
                   +-------------------+
```

### Flywheel Explanation

| Step | What Happens | Revenue Impact |
|------|-------------|---------------|
| 1 | Students engage daily (quizzes, drills, videos) | Student Premium subscriptions |
| 2 | Coaches see engagement → create content | Content Marketplace commission |
| 3 | More content → more value → more students stay | Lower churn = retained subscriptions |
| 4 | Parents see daily progress → satisfied → tell friends | Organic growth → more academy signups |
| 5 | More academies → more students → more data | B2B data access revenue |
| 6 | Brands see engaged audience → sponsor challenges | Sponsored challenge revenue |
| 7 | Platform reputation grows → more academies want listing | Higher subscription revenue |
| 8 | Each step reinforces the others | Compound growth |

---

## 5. Revenue Per Student Economics

### The Key Shift

| Metric | V1 | V3 |
|--------|----|----|
| Revenue source | Academy only | Academy + Student + Parent |
| Revenue per student | Rs 0 direct | Rs 10-35/month potential |
| Revenue per academy | Rs 2,999-7,999/month | Rs 4,500-12,000/month (with student upsells) |
| Customer relationships | 1 (academy owner) | 3 (owner + student + parent) |
| Churn risk | High (one decision-maker) | Low (entire family is invested) |

### Per-Student Revenue Breakdown (V3)

```
For every enrolled student on a Pro academy:

Academy subscription contribution:
  Rs 2,999 / 50 avg students = Rs 60/student/month
  (Platform earns from academy)

Student Premium (10% convert):
  0.10 x Rs 149 = Rs 14.9/student/month avg
  (Parent pays directly)

Content purchases:
  0.05 x Rs 100 avg = Rs 5/student/month avg
  (30% of Rs 5 = Rs 1.5 to platform)

Parent Premium (5% convert):
  0.05 x Rs 49 = Rs 2.45/student/month avg

Certification (2 per year avg):
  2 x Rs 500 / 12 = Rs 83/year = Rs 6.9/month avg
  (Amortized monthly)

TOTAL PLATFORM REVENUE PER STUDENT:
V1: Rs 60/month (academy sub only)
V3: Rs 60 + Rs 14.9 + Rs 1.5 + Rs 2.45 + Rs 6.9
  = Rs 85.75/month (+43% per student)
```

---

## 6. Cost Considerations

### New Costs in V3

| Cost | Amount | Why |
|------|--------|-----|
| Video storage (S3/R2) | Rs 2-5L/month (Year 2) | Student uploads, content marketplace |
| Content moderation | Rs 1L/month (1-2 people) | Review marketplace content, moderate reviews |
| Quiz content creation | Rs 50K/month (freelance) | 50 new questions/month |
| Sponsorship sales | Rs 1L/month (1 person) | Business development for brand partnerships |
| Payment processing (Razorpay) | ~2% of transactions | Student Premium, certifications |
| AI video analysis (Phase 2) | Rs 3-5L/month | GPU costs for technique analysis |

### Net Revenue

| | Year 2 Gross | Year 2 Costs | Year 2 Net |
|---|---|---|---|
| V1 | Rs 34L/month | Rs 8L/month | Rs 26L/month |
| V3 | Rs 62.25L/month | Rs 15L/month | Rs 47.25L/month |

**V3 net revenue is 82% higher than V1 despite higher costs.**

---

## 7. Implementation Priority by Revenue Impact

| Priority | Stream | Effort | Revenue Impact | When |
|----------|--------|--------|---------------|------|
| P0 | Lower churn (engagement features) | High | Rs 11L/month saved | MVP |
| P0 | Free-to-Pro conversion (public profiles) | Medium | Rs 5L/month | MVP |
| P1 | Student Premium subscription | Medium | Rs 7.45L/month | Phase 2 |
| P1 | Sponsored Challenges | Low (biz dev) | Rs 3L/month | Phase 2 |
| P1 | Certifications | Medium | Rs 2.5L/month | Phase 2 |
| P2 | Content Marketplace | High | Rs 1.8L/month | Phase 2 |
| P2 | Video Storage Upsell | Low | Rs 1.5L/month | Phase 2 |
| P2 | Parent Premium | Low | Rs 1L/month | Phase 2 |
| P3 | B2B Data Access | High (partnerships) | Rs 2.5L/month | Phase 3 |

---

## 8. Pricing Sensitivity (India Market)

### Key Considerations

| Factor | Implication |
|--------|------------|
| Academy owners are price-sensitive | Keep Pro at Rs 2,999 — don't increase |
| Parents spend Rs 2,000-5,000/month on academy | Rs 149/month Student Pro is <5% of academy fee — acceptable |
| Parents already spend on cricket gear | Rs 149 is less than a box of cricket balls |
| Rs 49 Parent Premium is impulse pricing | Less than a cup of coffee at CCD |
| UPI makes micro-payments easy | Rs 5-25 content purchases are frictionless |
| Annual discounts drive commitment | 2 months free on annual plans = standard Indian SaaS |

### Price Elasticity Testing

Before finalizing prices, test:
- Student Pro at Rs 99 vs Rs 149 vs Rs 199 → measure conversion rate
- Parent Plus at Rs 29 vs Rs 49 vs Rs 79 → measure conversion rate
- Certification at Rs 299 vs Rs 499 vs Rs 699 → measure demand

---

## Decisions Needed

| # | Question | Options |
|---|----------|---------|
| 1 | Student Premium — per student or per family? | Per student (each child has own profile). Family discount for 2+ |
| 2 | Content Marketplace — revenue split? | 70/30 (coach/platform). Consider 80/20 initially to attract creators |
| 3 | Certifications — who assesses? | Academy coach with platform video verification (scalable) |
| 4 | Sponsored challenges — minimum audience for sponsors? | 10,000+ students on platform before approaching brands |
| 5 | B2B data — privacy compliance? | Must comply with India's DPDP Act. Consent-based, anonymized |
| 6 | Should academy get a cut of Student Premium? | No — but academy benefits indirectly (better engagement, better results, better reviews) |
| 7 | Content Marketplace — free content allowed? | Yes — coaches can offer free content for visibility, then monetize premium content |
| 8 | Pricing — regional differences? | Same price nationally for MVP. Consider Tier 2/3 city discounts in Phase 3 |

---

*Last updated: 2026-03-22*
