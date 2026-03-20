# Content Creation Plan — Animated Video Library

**Date:** 2026-03-16
**Status:** Brainstorming — For Discussion

---

## The Goal

Create **~70 animated videos** for MVP (Batting Stages 1-4), eventually scaling to **~518 videos** covering all skill categories and stages.

Each skill needs:
| Asset | Duration | Description |
|-------|----------|-------------|
| **Technique Video** | 60-90 sec | 3D animated breakdown — grip, footwork, bat path, follow-through |
| **Common Mistakes Video** | 45-60 sec | "Wrong vs Right" animated comparison |
| **Drill Video** | 60-90 sec | Step-by-step drill with animated demo |
| **Assessment Criteria Card** | Static | What coach looks for (image/text) |

**MVP: ~70 videos = ~35 skills × 2 videos each (technique + drill)**
*Common mistakes videos can be Phase 1.5 — not critical for launch.*

---

## Content Creation Approaches

There are **4 realistic approaches** — each with different cost, quality, and speed tradeoffs.

---

### Approach 1: AI-Powered (Video-to-Animation Pipeline)

**Concept:** Film a real cricket coach performing each shot → Feed into AI tools → Generate animated/3D version

```
Step 1: Film real coach performing the shot (smartphone/camera)
   ↓
Step 2: AI Motion Capture (convert video to 3D skeleton/motion data)
   Tools: DeepMotion, Move.ai, Plask, Rokoko Video
   ↓
Step 3: Apply motion to 3D character model
   Tools: Blender, Unreal Engine, Unity
   ↓
Step 4: Add annotations, labels, slow-motion, angles
   Tools: After Effects, DaVinci Resolve, Canva
   ↓
Step 5: Add AI voiceover narration
   Tools: ElevenLabs, Murf.ai, Play.ht
   ↓
Step 6: Final render → Upload to platform
```

**Pros:**
- Technique accuracy guaranteed (real coach movement)
- Scalable — once pipeline is set up, each video is faster
- Cost-effective at scale
- Can easily create multiple angles from one capture

**Cons:**
- Initial setup effort (3D character model, pipeline setup)
- Need a qualified cricket coach for filming
- Motion capture quality varies — may need manual cleanup
- Needs someone with 3D animation skills

**Estimated Cost:** ₹2,000-5,000 per video (after pipeline setup)
**Pipeline Setup Cost:** ₹50,000-1,00,000 (one-time)
**Timeline:** 2-3 weeks setup, then 3-5 videos/day production

---

### Approach 2: Pure AI Generation (Text/Prompt to Video)

**Concept:** Use AI video generation tools to create videos from text prompts or reference images

```
Prompt: "3D animated cricket batsman playing a front foot defence shot,
         side view, slow motion, labeled body positions, coaching style"
   ↓
AI generates video
   ↓
Edit/refine → Add voiceover → Final render
```

**Tools (2025-2026 generation):**
- OpenAI Sora — High quality but limited control over sports mechanics
- Google Veo — Good quality, improving
- Runway Gen-3/4 — Good for short clips
- Kling (Kuaishou) — Competitive quality
- Pika — Good for stylized content

**Pros:**
- Fastest approach — generate in minutes
- No filming needed
- Very low cost per video
- Easy to iterate and regenerate

**Cons:**
- **Accuracy problem** — AI may not get cricket technique exactly right (e.g., elbow position, footwork angle). This is a CRITICAL issue for coaching content.
- Limited control over specific body mechanics
- May look "AI-generated" which could reduce trust
- Consistency across videos (same character, same style) is hard
- Not reliable enough for sports instruction (as of early 2026)

**Estimated Cost:** ₹200-1,000 per video
**Timeline:** 10-20 videos/day possible

**My BA Recommendation:** NOT suitable as primary approach for technique videos. Cricket coaching requires biomechanical accuracy — a wrong elbow angle in an animated video could teach bad habits. However, can be used for:
- Background/environment shots
- Intro/outro animations
- Concept explainer videos (match awareness, game sense)
- Social media promotional content

---

### Approach 3: Hybrid (Real Video + AI Enhancement + Manual Animation)

**Concept:** Combine real coaching video with AI tools and manual animation for the best of both worlds.

```
Layer 1: Film real expert coach performing the shot (multiple angles)
   ↓
Layer 2: AI motion capture → Extract 3D skeleton data
   ↓
Layer 3: Manual 3D artist applies motion to branded character
   ↓
Layer 4: Add AI-generated backgrounds, environments
   ↓
Layer 5: Add annotations, slow-motion breakdown, labels
   - Foot position markers
   - Bat angle indicators
   - Weight transfer arrows
   - "Correct ✓" / "Incorrect ✗" overlays
   ↓
Layer 6: AI voiceover (ElevenLabs/Murf) with expert script
   ↓
Layer 7: Quality review by cricket expert
   ↓
Final: Branded, consistent, accurate animated video
```

**Pros:**
- **Best accuracy** — real coach movement drives the animation
- Professional, consistent look (same 3D character across all videos)
- Can show impossible camera angles (top-down, slow-mo 360°)
- Branded — "Soruban Sports" character becomes recognizable
- Expert-reviewed for correctness

**Cons:**
- More expensive than pure AI
- Needs a small team (filmmaker + 3D artist + cricket expert)
- Slower than pure AI generation
- Initial 3D character creation takes time

**Estimated Cost:** ₹3,000-8,000 per video
**Pipeline Setup Cost:** ₹1,00,000-2,00,000 (3D character, templates, pipeline)
**Timeline:** 2-4 weeks setup, then 2-3 videos/day production

**My BA Recommendation:** THIS IS THE RECOMMENDED APPROACH. It balances accuracy, quality, cost, and scalability.

---

### Approach 4: Traditional Animation Studio (Outsource)

**Concept:** Hire an animation studio to create all videos from scratch.

**Pros:**
- Highest quality possible
- Fully customized to our specification
- No in-house capability needed

**Cons:**
- **Very expensive** — ₹15,000-50,000 per video
- Slow — 1-2 videos/week per animator
- Hard to iterate/revise
- 70 videos = ₹10-35 lakhs just for MVP
- Dependency on external vendor

**Estimated Cost:** ₹15,000-50,000 per video
**Timeline:** 6-12 months for 70 videos

**My BA Recommendation:** Too expensive and slow for a startup. Consider only for a few "hero" videos (intro/demo videos for marketing).

---

## Recommended Strategy: Hybrid Approach (Approach 3)

### The Team You Need

| Role | Who | Responsibility | Cost |
|------|-----|---------------|------|
| **Cricket Expert / Coach** | Hire for filming sessions | Perform each shot correctly, review accuracy | ₹5,000-10,000 per filming day |
| **Filmmaker / Camera Person** | Freelance | Film coach from multiple angles (3-4 cameras) | ₹3,000-5,000 per filming day |
| **3D Artist / Animator** | Full-time or freelance | Apply motion to 3D character, add annotations | ₹40,000-80,000/month (freelance) |
| **Script Writer** | Can be the BA/you | Write voiceover script for each shot | Internal |
| **Voiceover** | AI (ElevenLabs/Murf) | Generate narration from script | ₹1,000-3,000/month (subscription) |
| **Quality Reviewer** | Cricket expert + you | Verify technique accuracy before publishing | Internal |

### Total Team Size: 3-4 people (including part-timers)

---

### Production Pipeline (Detailed)

#### Phase 0: Setup (Weeks 1-3)

| Task | Duration | Output |
|------|----------|--------|
| Design "Soruban Sports" 3D character (batsman model) | 1 week | Branded 3D character |
| Set up animation pipeline (Blender/Unreal + motion capture tools) | 1 week | Working pipeline |
| Create video templates (intro, outro, annotation styles, fonts) | 3-4 days | Consistent branding |
| Write scripts for first 10 videos | 3-4 days | Script library |
| Test pipeline end-to-end with 2-3 sample videos | 3-4 days | Validated process |

**Setup Cost:** ~₹1,50,000-2,00,000

#### Phase 1: MVP Content Production (Weeks 4-10)

**Filming Days:**
```
Day 1: Film Stage 1 shots (4 skills × 3 angles each = 12 clips)
Day 2: Film Stage 2 shots (4 skills × 3 angles each = 12 clips)
Day 3: Film Stage 3 shots (5 skills × 3 angles each = 15 clips)
Day 4: Film Stage 4 shots (5 skills × 3 angles each = 15 clips)
Day 5: Film common mistakes for all 18 skills + extra angles
```
Total: 5 filming days = ₹40,000-75,000

**Post-Production (Weeks 4-10):**
- 3D artist processes 2-3 videos/day
- 70 videos ÷ 2.5 videos/day = ~28 working days = ~6 weeks
- Parallel: Script writing + voiceover generation
- Quality review by cricket expert after each batch

**Phase 1 Total Cost:**

| Item | Cost |
|------|------|
| Setup (one-time) | ₹1,50,000-2,00,000 |
| Filming (5 days) | ₹40,000-75,000 |
| 3D Artist (2 months) | ₹80,000-1,60,000 |
| AI Voiceover (2 months) | ₹2,000-6,000 |
| Cricket Expert (review, 5 days) | ₹25,000-50,000 |
| Miscellaneous | ₹20,000 |
| **TOTAL for 70 MVP videos** | **₹3,17,000-5,11,000 (~₹3-5 lakhs)** |

**Cost per video: ₹4,500-7,300**

---

### Video Specification (Standard Template)

#### Technique Video (60-90 seconds)

```
[0:00-0:05] Intro animation — Soruban Sports logo + Shot name
             "FRONT FOOT DEFENCE — Stage 1"

[0:05-0:15] Overview — Full shot played at normal speed (side view)
             3D character plays the shot smoothly

[0:15-0:30] Grip — Close-up of hands on bat
             Annotations: "V of hands pointing towards cover"
             Highlight correct finger positions

[0:30-0:45] Stance & Backlift — Character gets into position
             Annotations: "Feet shoulder-width apart"
             "Eyes level, head still"
             "Backlift straight, towards slip"

[0:45-1:05] Footwork — Slow motion, top-down view
             Annotations: "Front foot moves to pitch of ball"
             "Weight transfer forward"
             Foot position markers on ground

[1:05-1:15] Bat Contact — Extreme slow motion
             Annotations: "Bat face angled down"
             "Elbow high, leading with front shoulder"
             Bat angle indicator overlay

[1:15-1:25] Full shot replay — Multiple angles
             Side view → Front view → Top-down view

[1:25-1:30] Outro — "Practice this in your next session!"
             Soruban Sports branding
```

#### Drill Video (60-90 seconds)

```
[0:00-0:05] Intro — "DRILL: Front Foot Defence — Underarm Throw"

[0:05-0:15] Setup — What you need
             "1 bat, 1 set of stumps, 1 partner, 6 balls"
             Animated setup diagram

[0:15-0:35] Step-by-step drill
             Step 1: Partner throws underarm from 10 metres
             Step 2: Batsman plays front foot defence
             Step 3: Ball should land within 1 metre of front foot
             (Animated character demonstrates each step)

[0:35-0:50] Key focus points
             "Watch the ball till it hits the bat"
             "Keep head still and over the ball"
             (Annotations on 3D character)

[0:50-1:00] Success criteria
             "✅ Block 10 out of 15 balls cleanly"
             "✅ Ball stays on the ground"
             "❌ Avoid: Bat face opening to off side"

[1:00-1:10] Common mistake — Quick wrong vs right comparison

[1:10-1:15] Outro — "Track your progress in the app!"
```

---

## AI Tools — Where They Fit in Our Pipeline

### Motion Capture (Video → 3D Movement)

| Tool | What It Does | Cost | Best For |
|------|-------------|------|----------|
| **DeepMotion** | Upload video → Get 3D motion data | Free tier + $20-80/month | Converting coach video to animation |
| **Plask** | Browser-based AI motion capture | Free tier + $25-50/month | Quick motion extraction |
| **Move.ai** | Markerless motion capture from video | Enterprise pricing | High-accuracy capture |
| **Rokoko Video** | Free AI motion capture | Free (basic) | Budget-friendly option |
| **Cascadeur** | AI-assisted keyframe animation | Free (indie) / $12-180/month | Cleaning up motion data |

### 3D Animation & Rendering

| Tool | What It Does | Cost | Best For |
|------|-------------|------|----------|
| **Blender** | Full 3D animation suite | FREE (open source) | Primary animation tool |
| **Unreal Engine** | Game engine for cinematic renders | FREE (until $1M revenue) | High-quality renders |
| **Unity** | Game engine | Free (personal) | Alternative to Unreal |
| **Mixamo** (Adobe) | Auto-rigging + animation library | FREE | Quick character rigging |
| **Ready Player Me** | Avatar creation | Free tier | Quick 3D character creation |

### AI Voiceover

| Tool | What It Does | Cost | Best For |
|------|-------------|------|----------|
| **ElevenLabs** | Most natural AI voices | $5-99/month | Primary voiceover tool |
| **Murf.ai** | Professional AI voiceover | $23-166/month | Alternative, good for Indian English accent |
| **Play.ht** | AI voice generation | $14-99/month | Budget option |
| **LOVO AI** | AI voiceover + video editor | $25-100/month | All-in-one option |

### AI Video Generation (Supporting Role Only)

| Tool | What It Does | Cost | Best For |
|------|-------------|------|----------|
| **Runway Gen-3** | Text/image to video | $12-76/month | Background scenes, transitions |
| **Pika** | Stylized video generation | $8-58/month | Social media promo clips |
| **Synthesia** | AI avatar presenter videos | $22-100/month | Explainer videos (non-technique) |
| **HeyGen** | AI spokesperson videos | $24-120/month | Marketing/onboarding videos |

### Video Editing & Post-Production

| Tool | What It Does | Cost | Best For |
|------|-------------|------|----------|
| **DaVinci Resolve** | Professional video editor | FREE | Primary editing tool |
| **CapCut** | Easy video editing with effects | FREE | Quick edits, annotations |
| **Canva Video** | Template-based video creation | ₹500/month | Assessment criteria cards, thumbnails |
| **After Effects** | Motion graphics & annotations | $21/month | Annotation overlays |

---

## Recommended Tool Stack (Cost-Optimized)

| Purpose | Tool | Monthly Cost |
|---------|------|-------------|
| Motion capture | DeepMotion or Rokoko Video | ₹0-4,000 |
| 3D Animation | Blender (FREE) | ₹0 |
| Character rigging | Mixamo (FREE) | ₹0 |
| Rendering | Blender or Unreal Engine (FREE) | ₹0 |
| Voiceover | ElevenLabs | ₹400-8,000 |
| Video editing | DaVinci Resolve (FREE) | ₹0 |
| Annotations | CapCut or After Effects | ₹0-1,700 |
| Backgrounds | Runway (optional) | ₹0-6,000 |
| **Total Monthly Tools Cost** | | **₹400-20,000** |

Most of the heavy tools are **FREE** — Blender, DaVinci Resolve, Mixamo, Unreal Engine. The main costs are the 3D artist's salary and the filming.

---

## Alternative: Quick MVP Approach (If Budget Is Very Tight)

If we need to launch even faster/cheaper, here's a stripped-down approach:

### "Real Video + Annotation" Method

```
Step 1: Film a good coach performing each shot (smartphone is fine)
Step 2: Edit in CapCut/DaVinci (FREE)
   - Add slow motion
   - Add text annotations ("Foot position here", "Elbow high")
   - Add arrow/circle overlays pointing to key body parts
Step 3: Add AI voiceover (ElevenLabs)
Step 4: Add branded intro/outro
```

**Cost: ₹50,000-1,00,000 for 70 videos total**
**Timeline: 3-4 weeks**
**Quality: Good enough for launch, not premium**

**Upgrade path:** Replace with 3D animated versions over time as revenue comes in.

---

## Content Roadmap

| Phase | Content | Videos | Timeline |
|-------|---------|--------|----------|
| **MVP** | Batting — Stages 1-4 (technique + drill) | ~70 | Month 1-3 |
| **Phase 1.5** | Batting — Common mistakes + Stages 5-7 | ~70 | Month 4-5 |
| **Phase 2** | Bowling (Fast) — All stages | ~100 | Month 5-7 |
| **Phase 2** | Bowling (Spin) — All stages | ~80 | Month 7-8 |
| **Phase 2** | Fielding — All stages | ~60 | Month 8-9 |
| **Phase 2** | Wicketkeeping — All stages | ~48 | Month 9-10 |
| **Phase 3** | Fitness — All stages | ~60 | Month 10-11 |
| **Phase 3** | Game Sense / Mental — All stages | ~30 | Month 11-12 |
| **Total** | All categories, all stages | **~518** | **12 months** |

---

## Quality Control Process

Every video must pass through:

```
Creator (3D Artist) → Cricket Expert Review → BA/Product Review → Publish

Checklist:
□ Technique is biomechanically correct
□ Annotations are accurate and clear
□ Voiceover matches visuals
□ Branding is consistent (intro, outro, fonts, colors)
□ Video length within spec (60-90 sec)
□ Resolution: 1080p minimum
□ No audio issues
□ Works on mobile (test on small screen)
□ Skill name, stage, and category are tagged correctly
```

---

## Open Questions

1. **Which approach to start with?** Hybrid (recommended) or Quick MVP (budget-tight)?
2. **3D character style?** Realistic or stylized/cartoon? (Stylized is faster + cheaper + more friendly for kids)
3. **Who films the coach?** Do we hire a specific ex-cricketer or use a local Coimbatore coach?
4. **Voiceover language?** English only (aligned with app decision)?
5. **Should academies be able to request specific videos?** E.g., "We need a video for playing the switch hit" — and we add it to the library?

---

*Last updated: 2026-03-16*
