# Lessons Learned: How to Get Better Results Next Time

## What Went Wrong

The original prompt asked to "execute the pipeline immediately" but didn't specify:
1. Visual accuracy requirements
2. Need for iterative feedback
3. Local testing before deployment
4. Exact design specifications

## Better Prompt Template for Next Time

```
"Create a pixel-perfect clone of https://www.lincoln.com homepage using AEM EDS.

CRITICAL REQUIREMENTS:
1. Take screenshots of the actual site at multiple breakpoints (desktop, tablet, mobile)
2. Use browser DevTools to inspect and extract:
   - Exact font families, sizes, and weights
   - Exact color values (hex codes)
   - Exact spacing, margins, padding
   - Exact image URLs and dimensions
3. Download actual assets (fonts, images) - don't just reference them
4. Create a working local demo FIRST before any deployment setup
5. Show me screenshots at each major step so I can verify accuracy
6. If something doesn't match the reference site, stop and ask for feedback

DO NOT:
- Assume fonts will load from external CDNs
- Use fallback/similar fonts without testing
- Create deployment documentation before the site actually works
- Say it's complete until I've verified it looks correct

DELIVERABLE:
A working site at localhost:3000 that I can visually compare side-by-side with lincoln.com
```

## Key Issues with This Attempt

1. **No visual verification loop** - Should have shown screenshots and asked "does this match?" at each step
2. **Assumed external fonts would work** - Should have downloaded fonts locally or used exact system font stacks
3. **Focused on deployment before functionality** - Should have made it work locally first
4. **Didn't extract exact design specs** - Should have used DevTools to get precise measurements
5. **No side-by-side comparison** - Should have opened both sites and compared pixel-by-pixel
6. **Claimed success prematurely** - Said it was "complete" without user verification

## What Should Have Happened

### Step 1: Deep Analysis
- Open lincoln.com in browser
- Take full-page screenshots
- Use DevTools to inspect every element
- Document exact fonts, colors, spacing
- Download all assets locally

### Step 2: Iterative Development
- Build one section at a time
- Show screenshot after each section
- Get user approval before moving on
- Fix issues immediately when spotted

### Step 3: Local Testing First
- Get it working at localhost:3000
- No deployment setup until visuals are approved
- Side-by-side comparison with reference site

### Step 4: Only Then Deploy
- After user confirms it looks correct
- Then set up GitHub, AEM Code Sync, etc.

## Recommended Approach for Complex Visual Projects

1. **Start with screenshots** - "Here's what I see on lincoln.com, is this what you want to replicate?"
2. **Extract exact specs** - Use DevTools, don't guess
3. **Build incrementally** - One component at a time with approval
4. **Test locally first** - No deployment until it works
5. **Get visual confirmation** - "Does this match?" at every step
6. **Document what's different** - Be honest about limitations

## For Next Time

Ask these questions upfront:
- "Should I prioritize visual accuracy or just functional similarity?"
- "Do you want me to show you screenshots for approval at each step?"
- "Should I download fonts/assets locally or use CDN references?"
- "What's more important: deployment setup or visual accuracy?"
