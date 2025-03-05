# Farcaster Quiz Frame v2 Implementation Prompts

## 1. Project Initialization
```text
Create a Next.js TypeScript project with:
- Initial page at /quiz with basic frame container
- Environment configuration for NEYNAR_API_KEY
- Type definitions for QuizQuestion and QuizState
- Base CSS with mobile viewport settings
- WalletIntegration component shell
- Title set to "Farcaster Quiz Frame"
```

## 2. Neynar API Integration
```text
Implement API route /api/casts/[fid].ts that:
- Takes Farcaster ID parameter
- Uses NEYNAR_API_KEY from environment
- Returns last 10 casts with error handling
- Add TypeScript types for CastResponse
- Set cache-control headers for 5 minutes
```

## 3. Quiz State Management
```text
Create useQuizStore Zustand store with:
- Initial state matching QuizState type
- Actions for starting/restarting quiz
- Score increment logic
- Current question calculation
- Loading state transitions
- LocalStorage persistence for points
```

## 4. Question Processing
```text
Implement processCasts.ts utility that:
- Takes CastResponse[]
- Generates 2 multiple choice questions
- Extracts keywords from cast texts
- Creates plausible wrong answers
- Returns QuizQuestion[] with:
  - questionText
  - options (4 items)
  - correctIndex
  - castReference
```

## 5. Main Quiz Component
```text
Create QuizContainer.tsx that:
- Uses quizStore state
- Handles initial cast loading
- Shows loading spinner
- Renders QuestionCard or ScoreSummary
- Implements auto-scroll reset
- Connects WalletIntegration
- Uses CSS Grid layout
```

## 6. Question Card UI
```text
Build QuestionCard.tsx with:
- Animated transition on answer
- Touch-friendly option buttons
- Progress indicator (1/2)
- Score display
- Dynamic option highlighting
- clamp() font sizing
- Error boundary
```

## 7. Canvas Rendering Setup
```text
Implement CanvasWrapper.tsx that:
- Creates canvas context
- Handles resize events
- Renders question text
- Draws answer options
- Manages click/touch regions
- Uses requestAnimationFrame
- Implements bitmap caching
```

## 8. Answer Validation
```text
Add handleAnswer function that:
- Compares selected vs correct index
- Updates score in quizStore
- Triggers animation
- Progresses to next question
- Handles completion state
- Stores results in URL params
- Throttles rapid inputs
```

## 9. Mobile Touch Handling
```text
Implement touch controllers with:
- 300ms delay prevention
- Touch start/end handlers
- Visual feedback on press
- Swipe gesture prevention
- Dynamic hitbox sizing
- Orientation change handler
- Performance optimizations
```

## 10. Results Summary
```text
Create ScoreSummary.tsx showing:
- Final score out of 2
- Earned points calculation
- Retry button
- Shareable text snippet
- Wallet connection status
- LocalStorage integration
- Error recovery option
```

## 11. Animation System
```text
Add useQuizAnimations hook that:
- Manages flip/slide transitions
- Uses WebGL for effects
- Handles canvas transforms
- Syncs CSS transitions
- Optimizes for mobile GPUs
- Implements lazy loading
- Falls back to CSS animations
```

## 12. Final Integration
```text
Wire all components together:
- Connect API route to QuizContainer
- Link animations to state changes
- Test full user flow
- Add error boundaries
- Implement mobile-first CSS
- Set production config
- Verify constraint compliance
```

Each prompt builds on previous implementation with incremental complexity. The sequence ensures proper integration of APIs, state management, and UI components while maintaining mobile-first principles and Farcaster Frame v2 requirements.