# Meal Mate

취향, 제외 재료, 다이어트 방식에 맞춰 하루 식단과 일주일 장보기 목록을 만들어주는 정적 웹 앱입니다.

## 주요 기능

- 일반 감량식 식단 생성
- 스위치온 다이어트 DAY 1-28 모드
- 선호 음식과 제외 재료 반영
- 싫어하는 채소/재료 직접 입력
- 오늘 식단, 일주일 식단, 장보기 목록 보기

## 로컬에서 열기

별도 빌드 과정이 없습니다. `index.html`을 브라우저에서 열면 바로 실행됩니다.

## 배포

정적 사이트라서 GitHub Pages, Netlify, Vercel, Cloudflare Pages에 그대로 배포할 수 있습니다.

### Netlify

1. 이 폴더를 Netlify에 드래그 앤 드롭합니다.
2. 빌드 명령은 비워둡니다.
3. 배포 폴더는 `.` 입니다.

### Vercel

1. 프로젝트를 가져옵니다.
2. Framework Preset은 `Other`로 둡니다.
3. Build Command는 비워둡니다.
4. Output Directory는 `.` 입니다.

### GitHub Pages

1. 저장소 루트에 이 파일들을 올립니다.
2. Settings > Pages에서 배포 소스를 `Deploy from a branch`로 선택합니다.
3. Branch는 `main`, folder는 `/root`로 설정합니다.

## 파일 구조

- `index.html`: 화면 구조와 메타 태그
- `styles.css`: 반응형 UI 스타일
- `app.js`: 식단 데이터, 추천 로직, 화면 렌더링
- `netlify.toml`: Netlify 정적 배포 설정
- `.nojekyll`: GitHub Pages 정적 파일 처리 설정

## 참고

이 앱은 식단 계획을 돕는 도구이며, 의학적 진단이나 치료를 대신하지 않습니다. 질환이 있거나 약을 복용 중이면 전문가와 상담한 뒤 사용하세요.
