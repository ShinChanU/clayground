# Design System

독립적인 디자인 시스템 라이브러리 - Rollup + TypeScript + React 19 + Tailwind 4 + shadcn/ui

## 기술 스택

- **React**: 19.0.0
- **TypeScript**: 5.8.2
- **Tailwind CSS**: 4.0.0
- **Rollup**: 4.30.1
- **shadcn/ui** 기반 컴포넌트

## 특징

- ✅ 완전히 독립적인 프로젝트 (모노레포 구조와 독립)
- ✅ 고정 버전 dependencies (^, ~ 없음)
- ✅ React 19 & Tailwind 4 최신 버전
- ✅ TypeScript 완전 지원
- ✅ Rollup 번들러로 ESM/CJS 출력
- ✅ shadcn/ui 디자인 시스템

## 프로젝트 구조

```
packages/design-system/
├── src/
│   ├── components/      # React 컴포넌트
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── lib/
│   │   └── utils.ts     # 유틸리티 함수
│   ├── styles.css       # Tailwind 스타일
│   └── index.ts         # 메인 export
├── dist/                # 빌드 결과물
├── rollup.config.js     # Rollup 설정
├── tailwind.config.js   # Tailwind 설정
├── tsconfig.json        # TypeScript 설정
├── postcss.config.js    # PostCSS 설정
├── components.json      # shadcn/ui 설정
└── package.json
```

## 설치

```bash
cd packages/design-system
pnpm install
```

## 스크립트

```bash
# 개발 모드 (watch)
pnpm dev

# 프로덕션 빌드
pnpm build

# 빌드 결과물 삭제
pnpm clean
```

## 빌드 결과물

빌드 시 다음 파일들이 생성됩니다:

- `dist/index.esm.js` - ESM 번들
- `dist/index.cjs.js` - CommonJS 번들
- `dist/index.d.ts` - TypeScript 타입 정의
- `dist/*.map` - Source maps

## 사용법

### 다른 프로젝트에서 사용

```bash
# 로컬 링크
pnpm link /path/to/packages/design-system

# 또는 package.json에 추가
{
  "dependencies": {
    "@repo/design-system": "workspace:*"
  }
}
```

### 컴포넌트 import

```tsx
import { Button, Card, Input, cn } from '@repo/design-system';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>제목</CardTitle>
        <CardDescription>설명</CardDescription>
      </CardHeader>
      <CardContent>
        <Input placeholder="입력..." />
      </CardContent>
      <CardFooter>
        <Button>확인</Button>
      </CardFooter>
    </Card>
  );
}
```

## 포함된 컴포넌트

### Button
다양한 variant와 size를 지원하는 버튼 컴포넌트

```tsx
<Button variant="default">기본</Button>
<Button variant="destructive">삭제</Button>
<Button variant="outline">아웃라인</Button>
<Button variant="ghost">고스트</Button>
<Button size="sm">작음</Button>
<Button size="lg">큼</Button>
```

### Card
카드 레이아웃 컴포넌트

```tsx
<Card>
  <CardHeader>
    <CardTitle>타이틀</CardTitle>
    <CardDescription>설명</CardDescription>
  </CardHeader>
  <CardContent>내용</CardContent>
  <CardFooter>푸터</CardFooter>
</Card>
```

### Input
입력 필드 컴포넌트

```tsx
<Input type="text" placeholder="이름" />
<Input type="email" placeholder="이메일" />
```

## Tailwind 테마 커스터마이징

`tailwind.config.js`에서 테마를 수정할 수 있습니다:

```js
theme: {
  extend: {
    colors: {
      // 커스텀 색상 추가
    }
  }
}
```

CSS 변수는 `src/styles.css`에서 수정:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... */
}
```

## shadcn/ui 컴포넌트 추가

```bash
# shadcn/ui CLI로 컴포넌트 추가 (설치 필요 시)
npx shadcn-ui@latest add [component-name]
```

`components.json` 설정이 이미 완료되어 있습니다.

## 개발 가이드

### 새 컴포넌트 추가

1. `src/components/YourComponent.tsx` 생성
2. shadcn/ui 스타일 가이드 따르기
3. `src/index.ts`에 export 추가
4. `pnpm build`로 빌드 테스트

### TypeScript

- Path alias `@/*`는 `src/*`로 매핑됨
- 모든 컴포넌트는 타입 정의 포함
- `tsconfig.json`에서 설정 수정 가능

## 라이선스

MIT
