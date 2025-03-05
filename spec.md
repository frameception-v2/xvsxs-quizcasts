```markdown
# Farcaster Quiz Frame v2 Specification Document

## 1. OVERVIEW

### Core Functionality
- Dynamic quiz generation from user's recent Farcaster casts
- Two-phase interactive quiz with:
  - 2 multiple choice questions (4 options each)
  - Real-time score tracking
  - End-screen with performance summary
  - Points reward system
- Cast content integration via Neynar API
- Wallet-connected identity verification

### UX Flow
1. Initialization: 
   - Fetch user's last 10 casts via Neynar API
   - Parse casts for quiz content
   - Generate question bank

2. Quiz Sequence:
   - Question 1 display (text + options)
   - Answer validation
   - Score update
   - Smooth transition to Question 2
   - Final score display

3. Completion:
   - Points reward calculation
   - Shareable result card
   - Retry option

## 2. TECHNICAL REQUIREMENTS

### Frontend Components
```tsx
// Quiz Container
<div className="frame-container">
  <CanvasWrapper>
    {quizState === 'active' && (
      <QuestionCard 
        question={currentQuestion}
        onAnswer={handleAnswer}
      />
    )}
    {quizState === 'completed' && (
      <ScoreSummary 
        score={userScore}
        onRetry={resetQuiz}
      />
    )}
  </CanvasWrapper>
  <WalletIntegration />
</div>
```

### API Integration Strategy
```javascript
// Neynar Casts Fetch
const fetchUserCasts = async (fid) => {
  const response = await fetch(
    `https://api.neynar.com/v2/farcaster/cast/search?author_fid=${fid}&limit=10`,
    {
      headers: { 
        'x-api-key': process.env.NEYNAR_API_KEY,
        'Content-Type': 'application/json'
      }
    }
  );
  return response.json().then(data => data.result.casts);
};
```

### State Management
```ts
type QuizState = {
  questions: QuizQuestion[];
  currentIndex: number;
  score: number;
  status: 'idle' | 'loading' | 'active' | 'completed';
};

const [quizState, setQuizState] = useState<QuizState>({
  questions: [],
  currentIndex: 0,
  score: 0,
  status: 'idle'
});
```

### Mobile Responsiveness
- CSS Grid for adaptive layouts
- Touch-friendly button sizes (min 48px)
- Viewport meta tag:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

## 3. FRAMES v2 IMPLEMENTATION

### Interactive Elements
```html
<canvas id="quiz-canvas" 
        onclick="handleCanvasClick(event)"
        ontouchstart="handleTouchStart(event)">
</canvas>
```

### Animation Pipeline
```css
.question-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.flip-animation {
  transform: rotateY(180deg);
}

.slide-in {
  animation: slideFromRight 0.5s forwards;
}

@keyframes slideFromRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
```

### Input Handling
```javascript
const handleCanvasClick = (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  options.forEach(opt => {
    if(isInBoundary(x, y, opt.bounds)) {
      submitAnswer(opt.value);
    }
  });
};
```

## 4. MOBILE CONSIDERATIONS

### Touch Optimization
- 300ms click delay prevention:
```javascript
document.addEventListener('touchstart', {}, true);
```

### Responsive Techniques
- CSS clamp() for fluid typography
```css
.question-text {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
}
```

### Performance
- Canvas bitmap caching
- Lazy load non-critical assets
- WebGL acceleration for animations

## 5. CONSTRAINTS COMPLIANCE

✅ **No Database Requirements**  
All state managed in client memory and URL parameters

✅ **No Smart Contracts**  
Points system uses localStorage only

✅ **Approved APIs Only**  
Only Neynar API endpoints from provided documentation

✅ **Complexity Control**  
Single-purpose design with limited feature set

---

**Implementation Timeline**  
| Phase | Duration | Deliverables |
|-------|----------|--------------|
| 1. Core Setup | 2d | API integration, Base components |
| 2. Quiz Engine | 3d | State machine, Answer logic |
| 3. Canvas Render | 2d | Interactive elements, Animations |
| 4. Polish | 1d | Mobile optimizations, Error handling |
```