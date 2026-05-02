const meals = {
  breakfast: [
    makeMeal("그릭요거트 오트볼", 430, 31, 52, 11, ["balanced", "highProtein", "quick"], ["dairy"], ["yogurt"], ["그릭요거트 200g", "오트밀 45g", "블루베리", "아몬드 10알"], { 그릭요거트: 1, 오트밀: 1, 블루베리: 1, 아몬드: 1 }),
    makeMeal("두부 달걀 스크램블", 390, 34, 28, 16, ["highProtein", "lowCarb"], [], ["tofu", "egg", "rice"], ["두부 반 모", "달걀 2개", "시금치", "현미밥 반 공기"], { 두부: 1, 달걀: 2, 시금치: 1, 현미밥: 1 }),
    makeMeal("닭가슴살 샌드위치", 450, 38, 48, 12, ["balanced", "highProtein", "quick"], [], ["chicken"], ["통밀빵 2장", "닭가슴살 100g", "토마토", "양상추"], { 통밀빵: 1, 닭가슴살: 1, 토마토: 1, 양상추: 1 }),
    makeMeal("참치 아보카도 컵", 360, 32, 18, 19, ["highProtein", "lowCarb", "quick"], ["seafood"], ["fish"], ["참치 1캔", "아보카도 반 개", "오이", "김가루"], { 참치: 1, 아보카도: 1, 오이: 1, 김가루: 1 }),
    makeMeal("새우 달걀 오믈렛", 410, 36, 16, 22, ["highProtein", "lowCarb"], ["seafood"], ["egg", "fish"], ["새우 100g", "달걀 2개", "방울토마토", "양파"], { 새우: 1, 달걀: 2, 방울토마토: 1, 양파: 1 }),
    makeMeal("고구마 닭가슴살 플레이트", 470, 40, 55, 9, ["balanced", "highProtein"], [], ["chicken", "sweetPotato", "egg"], ["고구마 1개", "닭가슴살 120g", "오이", "삶은 달걀 1개"], { 고구마: 1, 닭가슴살: 1, 오이: 1, 달걀: 1 }),
    makeMeal("두부 달걀 머핀 박스", 405, 35, 20, 20, ["highProtein", "lowCarb", "prep"], [], ["tofu", "egg"], ["두부 반 모", "달걀 2개", "시금치", "방울토마토"], { 두부: 1, 달걀: 2, 시금치: 1, 방울토마토: 1 })
  ],
  lunch: [
    makeMeal("닭가슴살 현미 덮밥", 560, 45, 66, 13, ["balanced", "highProtein"], [], ["chicken", "rice"], ["닭가슴살 130g", "현미밥 150g", "브로콜리", "간장 소스"], { 닭가슴살: 1, 현미밥: 1, 브로콜리: 1 }),
    makeMeal("연어 샐러드 볼", 520, 39, 34, 26, ["balanced", "lowCarb"], ["seafood"], ["fish", "sweetPotato"], ["연어 120g", "믹스채소", "아보카도", "고구마 반 개"], { 연어: 1, 믹스채소: 1, 아보카도: 1, 고구마: 1 }),
    makeMeal("소고기 채소 비빔밥", 590, 40, 70, 17, ["balanced", "highProtein"], ["beef"], ["beef", "rice"], ["우둔살 100g", "현미밥", "나물 믹스", "고추장 1작은술"], { 우둔살: 1, 현미밥: 1, "나물 믹스": 1 }),
    makeMeal("닭 안심 메밀면", 540, 43, 62, 12, ["balanced", "highProtein"], [], ["chicken", "egg"], ["닭 안심 130g", "메밀면", "오이", "삶은 달걀"], { "닭 안심": 1, 메밀면: 1, 오이: 1, 달걀: 1 }),
    makeMeal("두부 포케 볼", 500, 29, 58, 18, ["balanced"], [], ["tofu", "rice"], ["두부 200g", "잡곡밥", "양배추", "옥수수", "간장 드레싱"], { 두부: 1, 잡곡밥: 1, 양배추: 1, 옥수수: 1 }),
    makeMeal("닭가슴살 양배추 랩", 440, 41, 25, 18, ["highProtein", "lowCarb", "quick"], [], ["chicken"], ["닭가슴살 130g", "양배추 잎", "파프리카", "후무스"], { 닭가슴살: 1, 양배추: 1, 파프리카: 1, 후무스: 1 }),
    makeMeal("돼지 안심 현미 도시락", 550, 43, 56, 17, ["balanced", "highProtein"], ["pork"], ["pork", "rice"], ["돼지 안심 120g", "현미밥 반 공기", "상추", "김치"], { "돼지 안심": 1, 현미밥: 1, 상추: 1, 김치: 1 }),
    makeMeal("밀프랩 치킨 병아리콩 볼", 545, 46, 50, 16, ["balanced", "highProtein", "prep"], [], ["chicken", "rice"], ["닭가슴살 130g", "병아리콩", "현미밥 반 공기", "브로콜리"], { 닭가슴살: 1, 병아리콩: 1, 현미밥: 1, 브로콜리: 1 }),
    makeMeal("소고기 토마토 현미 박스", 575, 42, 58, 20, ["balanced", "highProtein", "prep"], ["beef"], ["beef", "rice"], ["우둔살 120g", "현미밥 반 공기", "토마토소스", "양배추"], { 우둔살: 1, 현미밥: 1, 토마토소스: 1, 양배추: 1 })
  ],
  dinner: [
    makeMeal("돼지 안심 쌈밥", 510, 42, 46, 18, ["balanced", "highProtein"], ["pork"], ["pork", "rice"], ["돼지 안심 120g", "상추", "현미밥 100g", "쌈장 소량"], { "돼지 안심": 1, 상추: 1, 현미밥: 1 }),
    makeMeal("닭다리살 구이와 채소", 480, 41, 26, 23, ["highProtein", "lowCarb"], [], ["chicken"], ["닭다리살 130g", "파프리카", "버섯", "올리브오일 1작은술"], { 닭다리살: 1, 파프리카: 1, 버섯: 1 }),
    makeMeal("두부 김치 볶음", 430, 30, 32, 18, ["lowCarb", "balanced"], [], ["tofu", "rice"], ["두부 한 모", "김치", "양파", "현미밥 반 공기"], { 두부: 1, 김치: 1, 양파: 1, 현미밥: 1 }),
    makeMeal("흰살생선 채소찜", 420, 43, 20, 17, ["highProtein", "lowCarb"], ["seafood"], ["fish"], ["대구살 150g", "청경채", "버섯", "폰즈 소스"], { 대구살: 1, 청경채: 1, 버섯: 1 }),
    makeMeal("소고기 버섯 샐러드", 460, 38, 18, 26, ["highProtein", "lowCarb"], ["beef"], ["beef"], ["우둔살 120g", "버섯", "루꼴라", "발사믹"], { 우둔살: 1, 버섯: 1, 루꼴라: 1 }),
    makeMeal("병아리콩 치킨 스튜", 530, 44, 48, 17, ["balanced", "highProtein"], [], ["chicken"], ["닭가슴살 120g", "병아리콩", "토마토소스", "당근"], { 닭가슴살: 1, 병아리콩: 1, 토마토소스: 1, 당근: 1 }),
    makeMeal("돼지 안심 채소구이 박스", 495, 43, 24, 24, ["highProtein", "lowCarb", "prep"], ["pork"], ["pork"], ["돼지 안심 130g", "애호박", "가지", "양파"], { "돼지 안심": 1, 애호박: 1, 가지: 1, 양파: 1 }),
    makeMeal("두부 버섯 조림 도시락", 410, 31, 26, 21, ["balanced", "lowCarb", "prep"], [], ["tofu"], ["두부 한 모", "버섯", "청경채", "간장 소스"], { 두부: 1, 버섯: 1, 청경채: 1, 간장: 1 })
  ],
  snack: [
    makeMeal("삶은 달걀과 과일", 220, 14, 25, 8, ["balanced", "highProtein", "quick"], [], ["egg"], ["삶은 달걀 2개", "사과 반 개"], { 달걀: 2, 사과: 1 }),
    makeMeal("프로틴 쉐이크", 190, 28, 10, 4, ["highProtein", "lowCarb", "quick"], ["dairy"], ["yogurt"], ["프로틴 파우더", "무가당 두유"], { "프로틴 파우더": 1, "무가당 두유": 1 }),
    makeMeal("고구마와 견과", 250, 7, 42, 8, ["balanced", "quick"], [], ["sweetPotato"], ["고구마 1개", "호두 4알"], { 고구마: 1, 호두: 1 }),
    makeMeal("코티지치즈 토마토", 210, 24, 12, 8, ["highProtein", "lowCarb", "quick"], ["dairy"], ["yogurt"], ["코티지치즈 150g", "방울토마토", "후추"], { 코티지치즈: 1, 방울토마토: 1 }),
    makeMeal("닭가슴살 육포와 오이", 180, 26, 9, 4, ["highProtein", "lowCarb", "quick"], [], ["chicken"], ["닭가슴살 육포", "오이 스틱"], { "닭가슴살 육포": 1, 오이: 1 }),
    makeMeal("두유 라떼와 바나나", 260, 12, 38, 7, ["balanced", "quick"], [], [], ["무가당 두유", "커피", "바나나 1개"], { "무가당 두유": 1, 커피: 1, 바나나: 1 }),
    makeMeal("삶은 달걀 프로틴 박스", 260, 25, 12, 12, ["highProtein", "lowCarb", "quick", "prep"], [], ["egg"], ["삶은 달걀 2개", "방울토마토", "아몬드 10알"], { 달걀: 2, 방울토마토: 1, 아몬드: 1 })
  ]
};

const switchOnMeals = {
  days1to3: {
    breakfast: [
      makeMeal("아침 무가당 단백질 쉐이크", 150, 28, 2, 2, ["highProtein", "lowCarb", "quick"], ["dairy"], [], ["무가당 저탄수 단백질 파우더", "물"], { "무가당 저탄수 단백질 파우더": 1 }),
      makeMeal("아침 무가당 식물성 프로틴", 160, 29, 3, 3, ["highProtein", "lowCarb", "quick"], [], [], ["무가당 식물성 단백질 파우더", "물"], { "무가당 식물성 단백질 파우더": 1 })
    ],
    lunch: [
      makeMeal("점심 무가당 단백질 쉐이크", 150, 28, 2, 2, ["highProtein", "lowCarb", "quick"], ["dairy"], [], ["무가당 저탄수 단백질 파우더", "물"], { "무가당 저탄수 단백질 파우더": 1 }),
      makeMeal("점심 무가당 식물성 프로틴", 160, 29, 3, 3, ["highProtein", "lowCarb", "quick"], [], [], ["무가당 식물성 단백질 파우더", "물"], { "무가당 식물성 단백질 파우더": 1 })
    ],
    dinner: [
      makeMeal("저녁 무가당 단백질 쉐이크", 150, 28, 2, 2, ["highProtein", "lowCarb", "quick"], ["dairy"], [], ["무가당 저탄수 단백질 파우더", "물"], { "무가당 저탄수 단백질 파우더": 1 }),
      makeMeal("저녁 무가당 식물성 프로틴", 160, 29, 3, 3, ["highProtein", "lowCarb", "quick"], [], [], ["무가당 식물성 단백질 파우더", "물"], { "무가당 식물성 단백질 파우더": 1 })
    ],
    snack: [
      makeMeal("간식 무가당 단백질 쉐이크", 150, 28, 2, 2, ["highProtein", "lowCarb", "quick"], ["dairy"], [], ["무가당 저탄수 단백질 파우더", "물"], { "무가당 저탄수 단백질 파우더": 1 }),
      makeMeal("간식 무가당 두유 프로틴", 220, 31, 6, 7, ["highProtein", "lowCarb", "quick"], [], [], ["무가당 식물성 단백질 파우더", "무가당 두유 1회분"], { "무가당 식물성 단백질 파우더": 1, "무가당 두유": 1 })
    ]
  },
  days4to7: {
    breakfast: [
      makeMeal("아침 무가당 단백질 쉐이크", 150, 28, 2, 2, ["highProtein", "lowCarb", "quick"], ["dairy"], [], ["무가당 저탄수 단백질 파우더", "물"], { "무가당 저탄수 단백질 파우더": 1 }),
      makeMeal("아침 무가당 식물성 프로틴", 160, 29, 3, 3, ["highProtein", "lowCarb", "quick"], [], [], ["무가당 식물성 단백질 파우더", "물"], { "무가당 식물성 단백질 파우더": 1 })
    ],
    lunch: [
      makeMeal("닭가슴살 점심", 470, 43, 48, 13, ["balanced", "highProtein"], [], ["chicken", "rice"], ["현미잡곡밥 100g", "닭가슴살 120g", "상추", "방울토마토 3개"], { 현미잡곡밥: 1, 닭가슴살: 1, 상추: 1, 방울토마토: 1 }),
      makeMeal("연어 점심", 490, 38, 46, 20, ["balanced", "highProtein"], ["seafood"], ["fish", "rice"], ["현미잡곡밥 100g", "연어 100g", "루꼴라", "청경채"], { 현미잡곡밥: 1, 연어: 1, 루꼴라: 1, 청경채: 1 }),
      makeMeal("두부 달걀 점심", 460, 36, 50, 17, ["balanced", "highProtein"], [], ["tofu", "egg", "rice"], ["현미잡곡밥 100g", "두부 반 모", "삶은 달걀 1개", "상추"], { 현미잡곡밥: 1, 두부: 1, 달걀: 1, 상추: 1 }),
      makeMeal("돼지 안심 점심", 480, 41, 48, 15, ["balanced", "highProtein"], ["pork"], ["pork", "rice"], ["현미잡곡밥 100g", "돼지 안심 120g", "상추", "청경채"], { 현미잡곡밥: 1, "돼지 안심": 1, 상추: 1, 청경채: 1 }),
      makeMeal("밀프랩 닭가슴살 점심", 475, 43, 47, 14, ["balanced", "highProtein", "prep"], [], ["chicken", "rice"], ["현미잡곡밥 100g", "닭가슴살 120g", "브로콜리", "방울토마토 3개"], { 현미잡곡밥: 1, 닭가슴살: 1, 브로콜리: 1, 방울토마토: 1 })
    ],
    dinner: [
      makeMeal("저녁 무가당 단백질 쉐이크", 150, 28, 2, 2, ["highProtein", "lowCarb", "quick"], ["dairy"], [], ["무가당 저탄수 단백질 파우더", "물"], { "무가당 저탄수 단백질 파우더": 1 }),
      makeMeal("저녁 무가당 식물성 프로틴", 160, 29, 3, 3, ["highProtein", "lowCarb", "quick"], [], [], ["무가당 식물성 단백질 파우더", "물"], { "무가당 식물성 단백질 파우더": 1 })
    ],
    snack: [
      makeMeal("간식 무가당 단백질 쉐이크", 150, 28, 2, 2, ["highProtein", "lowCarb", "quick"], ["dairy"], [], ["무가당 저탄수 단백질 파우더", "물"], { "무가당 저탄수 단백질 파우더": 1 }),
      makeMeal("간식 무가당 두유 프로틴", 220, 31, 6, 7, ["highProtein", "lowCarb", "quick"], [], [], ["무가당 식물성 단백질 파우더", "무가당 두유 1회분"], { "무가당 식물성 단백질 파우더": 1, "무가당 두유": 1 })
    ]
  },
  week2: {
    breakfast: [
      makeMeal("아침 단백질 쉐이크", 190, 28, 10, 4, ["highProtein", "lowCarb", "quick"], ["dairy"], ["yogurt"], ["단백질 파우더", "물 또는 무가당 두유"], { "단백질 파우더": 1, "무가당 두유": 1 }),
      makeMeal("아침 식물성 프로틴", 210, 30, 12, 5, ["highProtein", "lowCarb", "quick"], [], [], ["식물성 단백질 파우더", "물 또는 무가당 두유"], { "식물성 단백질 파우더": 1, "무가당 두유": 1 })
    ],
    lunch: [
      makeMeal("닭가슴살 현미 소량 볼", 520, 45, 42, 18, ["balanced", "highProtein"], [], ["chicken", "rice"], ["닭가슴살 130g", "현미밥 반 공기", "상추", "김가루"], { 닭가슴살: 1, 현미밥: 1, 상추: 1, 김가루: 1 }),
      makeMeal("두부 달걀 현미 점심", 490, 36, 40, 18, ["balanced", "highProtein"], [], ["tofu", "egg", "rice"], ["현미밥 반 공기", "두부 반 모", "삶은 달걀 1개", "상추"], { 현미밥: 1, 두부: 1, 달걀: 1, 상추: 1 }),
      makeMeal("소고기 현미 점심", 530, 41, 42, 21, ["balanced", "highProtein"], ["beef"], ["beef", "rice"], ["현미밥 반 공기", "우둔살 120g", "루꼴라", "구운 가지"], { 현미밥: 1, 우둔살: 1, 루꼴라: 1, 가지: 1 }),
      makeMeal("돼지 안심 밀프랩 점심", 520, 43, 42, 19, ["balanced", "highProtein", "prep"], ["pork"], ["pork", "rice"], ["현미밥 반 공기", "돼지 안심 120g", "양배추", "김치"], { 현미밥: 1, "돼지 안심": 1, 양배추: 1, 김치: 1 })
    ],
    dinner: [
      makeMeal("두부 김치 무탄수 저녁", 420, 34, 18, 23, ["highProtein", "lowCarb"], [], ["tofu", "egg"], ["두부 한 모", "김치", "삶은 달걀 1개"], { 두부: 1, 김치: 1, 달걀: 1 }),
      makeMeal("연어 아보카도 무탄수 저녁", 500, 40, 18, 30, ["highProtein", "lowCarb"], ["seafood"], ["fish"], ["연어 130g", "아보카도 반 개", "상추"], { 연어: 1, 아보카도: 1, 상추: 1 }),
      makeMeal("닭다리살 채소 무탄수 저녁", 480, 41, 18, 25, ["highProtein", "lowCarb"], [], ["chicken"], ["닭다리살 130g", "상추", "구운 가지"], { 닭다리살: 1, 상추: 1, 가지: 1 }),
      makeMeal("돼지 수육 무탄수 저녁", 470, 42, 12, 26, ["highProtein", "lowCarb"], ["pork"], ["pork"], ["돼지 수육 120g", "상추", "무생채"], { "돼지 수육": 1, 상추: 1, 무생채: 1 }),
      makeMeal("닭가슴살 토마토 스튜", 450, 42, 22, 20, ["highProtein", "lowCarb", "prep"], [], ["chicken"], ["닭가슴살 130g", "토마토소스 소량", "양배추", "버섯"], { 닭가슴살: 1, 토마토소스: 1, 양배추: 1, 버섯: 1 })
    ],
    snack: [
      makeMeal("오후 단백질 쉐이크와 견과", 260, 32, 13, 11, ["highProtein", "lowCarb", "quick"], ["dairy"], ["yogurt"], ["단백질 파우더", "물", "견과류 한 줌"], { "단백질 파우더": 1, 견과류: 1 }),
      makeMeal("오후 식물성 프로틴과 견과", 280, 34, 15, 12, ["highProtein", "lowCarb", "quick"], [], [], ["식물성 단백질 파우더", "물", "견과류 한 줌"], { "식물성 단백질 파우더": 1, 견과류: 1 })
    ]
  },
  week3: {
    breakfast: [
      makeMeal("아침 단백질 쉐이크", 190, 28, 10, 4, ["highProtein", "lowCarb", "quick"], ["dairy"], ["yogurt"], ["단백질 파우더", "물 또는 무가당 두유"], { "단백질 파우더": 1, "무가당 두유": 1 }),
      makeMeal("아침 식물성 프로틴", 210, 30, 12, 5, ["highProtein", "lowCarb", "quick"], [], [], ["식물성 단백질 파우더", "물 또는 무가당 두유"], { "식물성 단백질 파우더": 1, "무가당 두유": 1 })
    ],
    lunch: [
      makeMeal("닭가슴살 잡곡밥 소량", 540, 46, 48, 17, ["balanced", "highProtein"], [], ["chicken", "rice"], ["닭가슴살 130g", "잡곡밥 반 공기", "쌈채소"], { 닭가슴살: 1, 잡곡밥: 1, 쌈채소: 1 }),
      makeMeal("생선 잡곡밥 소량", 520, 43, 44, 20, ["balanced", "highProtein"], ["seafood"], ["fish", "rice"], ["흰살생선 120g", "잡곡밥 반 공기", "청경채"], { 흰살생선: 1, 잡곡밥: 1, 청경채: 1 }),
      makeMeal("두부 달걀 저탄수 점심", 500, 38, 40, 20, ["balanced", "highProtein"], [], ["tofu", "egg", "rice"], ["잡곡밥 반 공기", "두부 반 모", "삶은 달걀 1개", "상추"], { 잡곡밥: 1, 두부: 1, 달걀: 1, 상추: 1 }),
      makeMeal("닭가슴살 양배추 밀프랩", 525, 45, 46, 18, ["balanced", "highProtein", "prep"], [], ["chicken", "rice"], ["잡곡밥 반 공기", "닭가슴살 130g", "양배추", "브로콜리"], { 잡곡밥: 1, 닭가슴살: 1, 양배추: 1, 브로콜리: 1 })
    ],
    dinner: [
      makeMeal("닭다리살 무탄수 저녁", 480, 41, 20, 24, ["highProtein", "lowCarb"], [], ["chicken"], ["닭다리살 130g", "상추", "방울토마토"], { 닭다리살: 1, 상추: 1, 방울토마토: 1 }),
      makeMeal("두부 채소 무탄수 저녁", 390, 30, 24, 20, ["balanced", "lowCarb"], [], ["tofu"], ["두부 한 모", "청경채", "애호박"], { 두부: 1, 청경채: 1, 애호박: 1 }),
      makeMeal("생선 해초 무탄수 저녁", 430, 42, 18, 21, ["highProtein", "lowCarb"], ["seafood"], ["fish"], ["흰살생선 130g", "해초", "상추"], { 흰살생선: 1, 해초: 1, 상추: 1 }),
      makeMeal("돼지 안심 무탄수 저녁", 450, 41, 14, 24, ["highProtein", "lowCarb"], ["pork"], ["pork"], ["돼지 안심 120g", "상추", "청경채"], { "돼지 안심": 1, 상추: 1, 청경채: 1 }),
      makeMeal("두부 버섯 밀프랩 저녁", 400, 31, 22, 21, ["balanced", "lowCarb", "prep"], [], ["tofu"], ["두부 한 모", "버섯", "청경채", "간장 소스"], { 두부: 1, 버섯: 1, 청경채: 1, 간장: 1 })
    ],
    snack: [
      makeMeal("오후 단백질 쉐이크", 190, 28, 10, 4, ["highProtein", "lowCarb", "quick"], ["dairy"], ["yogurt"], ["단백질 파우더", "물"], { "단백질 파우더": 1 }),
      makeMeal("오후 식물성 프로틴", 210, 30, 12, 5, ["highProtein", "lowCarb", "quick"], [], [], ["식물성 단백질 파우더", "물"], { "식물성 단백질 파우더": 1 })
    ]
  }
};

switchOnMeals.week4 = {
  breakfast: [
    makeMeal("아침 단백질 쉐이크", 190, 28, 10, 4, ["highProtein", "lowCarb", "quick"], ["dairy"], ["yogurt"], ["단백질 파우더", "물 또는 무가당 두유"], { "단백질 파우더": 1, "무가당 두유": 1 }),
    makeMeal("아침 식물성 프로틴", 210, 30, 12, 5, ["highProtein", "lowCarb", "quick"], [], [], ["식물성 단백질 파우더", "물 또는 무가당 두유"], { "식물성 단백질 파우더": 1, "무가당 두유": 1 })
  ],
  lunch: [
    makeMeal("닭가슴살 잡곡밥 정식", 560, 46, 52, 18, ["balanced", "highProtein"], [], ["chicken", "rice"], ["닭가슴살 130g", "잡곡밥 반 공기", "쌈채소", "김치"], { 닭가슴살: 1, 잡곡밥: 1, 쌈채소: 1, 김치: 1 }),
    makeMeal("고등어 해초밥", 560, 39, 50, 24, ["balanced", "highProtein"], ["seafood"], ["fish", "rice"], ["고등어구이", "현미밥 반 공기", "해초", "상추"], { 고등어: 1, 현미밥: 1, 해초: 1, 상추: 1 }),
    makeMeal("소고기 채소 덮밥", 580, 42, 54, 22, ["balanced", "highProtein"], ["beef"], ["beef", "rice"], ["우둔살 120g", "잡곡밥 반 공기", "청경채"], { 우둔살: 1, 잡곡밥: 1, 청경채: 1 }),
    makeMeal("돼지 안심 잡곡 밀프랩", 560, 44, 52, 20, ["balanced", "highProtein", "prep"], ["pork"], ["pork", "rice"], ["돼지 안심 120g", "잡곡밥 반 공기", "브로콜리", "김치"], { "돼지 안심": 1, 잡곡밥: 1, 브로콜리: 1, 김치: 1 })
  ],
  dinner: [
    makeMeal("닭다리살 묵은지 볶음", 500, 42, 24, 26, ["highProtein", "lowCarb"], [], ["chicken"], ["닭다리살 130g", "묵은지", "쌈채소"], { 닭다리살: 1, 묵은지: 1, 쌈채소: 1 }),
    makeMeal("두부 채소 그라탱", 430, 34, 25, 22, ["balanced", "lowCarb"], [], ["tofu"], ["두부 한 모", "애호박", "토마토소스 소량"], { 두부: 1, 애호박: 1, 토마토소스: 1 }),
    makeMeal("닭가슴살 채소 오븐구이", 470, 43, 24, 23, ["highProtein", "lowCarb", "prep"], [], ["chicken"], ["닭가슴살 130g", "브로콜리", "파프리카", "양파"], { 닭가슴살: 1, 브로콜리: 1, 파프리카: 1, 양파: 1 })
  ],
  snack: [
    makeMeal("오후 단백질 쉐이크", 190, 28, 10, 4, ["highProtein", "lowCarb", "quick"], ["dairy"], ["yogurt"], ["단백질 파우더", "물"], { "단백질 파우더": 1 }),
    makeMeal("오후 식물성 프로틴", 210, 30, 12, 5, ["highProtein", "lowCarb", "quick"], [], [], ["식물성 단백질 파우더", "물"], { "식물성 단백질 파우더": 1 })
  ]
};

const mealLabels = {
  breakfast: "아침",
  lunch: "점심",
  dinner: "저녁",
  snack: "간식"
};

const fastingSlots = {
  breakfast: makeMeal("24시간 단식 중", 0, 0, 0, 0, ["quick"], [], [], ["물", "무가당 차", "블랙커피는 오전 1잔까지"], {}),
  lunch: makeMeal("24시간 단식 중", 0, 0, 0, 0, ["quick"], [], [], ["물", "무가당 차", "전해질 보충"], {}),
  snack: makeMeal("24시간 단식 중", 0, 0, 0, 0, ["quick"], [], [], ["물", "무가당 차", "가벼운 산책"], {})
};

const tagLabels = {
  balanced: "균형",
  highProtein: "고단백",
  lowCarb: "저탄수",
  quick: "간편",
  prep: "밀프랩"
};

const favoriteLabels = {
  chicken: "닭고기",
  egg: "달걀",
  tofu: "두부",
  fish: "생선",
  beef: "소고기",
  pork: "돼지고기",
  sweetPotato: "고구마",
  rice: "밥"
};

const weekdays = ["월", "화", "수", "목", "금", "토", "일"];
let currentPlan = [];

const form = document.querySelector("#profileForm");
const mealList = document.querySelector("#mealList");
const weekPlan = document.querySelector("#weekPlan");
const shoppingList = document.querySelector("#shoppingList");
const exportShopping = document.querySelector("#exportShopping");
const exportMemo = document.querySelector("#exportMemo");
const switchStageField = document.querySelector("#switchStageField");
const switchGuide = document.querySelector("#switchGuide");
const preferenceSummary = document.querySelector("#preferenceSummary");
const dislikeStatus = document.querySelector("#dislikeStatus");
const goalFieldset = document.querySelector("#goalFieldset");
let weeklyFocus = [];

const focusIngredients = {
  chicken: ["닭가슴살", "닭 안심", "닭다리살", "닭고기"],
  egg: ["달걀"],
  tofu: ["두부"],
  fish: ["연어", "참치", "새우", "대구살", "흰살생선", "고등어"],
  beef: ["우둔살", "소고기"],
  pork: ["돼지 안심", "돼지 수육"],
  sweetPotato: ["고구마"],
  rice: ["현미밥", "잡곡밥", "현미잡곡밥", "밥"]
};

const shoppingUnitRules = [
  { pattern: /닭가슴살|닭 안심|닭다리살|돼지 안심|돼지 수육|우둔살|연어|대구살|흰살생선|고등어/, amount: 120, unit: "g" },
  { pattern: /달걀/, amount: 1, unit: "개" },
  { pattern: /두부/, amount: 0.5, unit: "모" },
  { pattern: /현미밥|잡곡밥|현미잡곡밥|통밀빵|메밀면/, amount: 1, unit: "팩" },
  { pattern: /고구마|사과|바나나|아보카도|오이|양파|파프리카|당근|애호박|가지|무|샐러리|옥수수|연근/, amount: 1, unit: "개" },
  { pattern: /상추|양상추|믹스채소|쌈채소|루꼴라|청경채|시금치|브로콜리|버섯|양배추|나물 믹스|나물|해초|깻잎|케일|콩나물|숙주|미나리|아스파라거스/, amount: 1, unit: "봉" },
  { pattern: /방울토마토|블루베리/, amount: 1, unit: "팩" },
  { pattern: /김치|묵은지|무생채|토마토소스|간장|김가루|후무스|쌈장|폰즈|발사믹/, amount: 1, unit: "소량" },
  { pattern: /단백질 파우더|프로틴 파우더|식물성 단백질 파우더|무가당 저탄수 단백질 파우더|무가당 식물성 단백질 파우더/, amount: 1, unit: "회분" },
  { pattern: /무가당 두유/, amount: 1, unit: "팩" },
  { pattern: /오트밀|아몬드|호두|견과류|병아리콩|옥수수|커피/, amount: 1, unit: "소량" }
];

function makeMeal(name, kcal, protein, carbs, fat, tags, avoid, favorites, items, shop) {
  return { name, kcal, protein, carbs, fat, tags, avoid, favorites, items, shop };
}

function checkedValues(selector) {
  return [...document.querySelectorAll(`${selector}:checked`)].map((input) => input.value);
}

function calculateTargets() {
  const gender = document.querySelector("#gender").value;
  const age = Number(document.querySelector("#age").value);
  const height = Number(document.querySelector("#height").value);
  const weight = Number(document.querySelector("#weight").value);
  const activity = Number(document.querySelector("#activity").value);
  const pace = Number(document.querySelector("#pace").value);

  const bmr =
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;
  const calories = Math.max(1200, Math.round((bmr * activity - pace) / 10) * 10);
  const protein = Math.round(weight * 1.6);
  return { calories, protein };
}

function getPreferences() {
  const goals = checkedValues("input[name='goal']");
  return {
    program: document.querySelector("input[name='program']:checked").value,
    switchDay: Number(document.querySelector("#switchDay").value),
    goals: goals.length ? goals : ["balanced"],
    favorites: checkedValues("input[name='favorite']"),
    avoid: checkedValues("input[name='avoid']"),
    dislikes: getDislikes()
  };
}

function getSwitchPhase(day) {
  if (day <= 3) return "days1to3";
  if (day <= 7) return "days4to7";
  if (day <= 14) return "week2";
  if (day <= 21) return "week3";
  return "week4";
}

function getSwitchRules(day) {
  const phase = getSwitchPhase(day);
  const phaseTitles = {
    days1to3: "도입기 A",
    days4to7: "도입기 B",
    week2: "가속기",
    week3: "진행기",
    week4: "안정기"
  };
  const rules = {
    days1to3: {
      shake: "쉐이크 4회",
      meal: "물 기준·두유 1회",
      carbs: "하루 20-30g",
      fasting: "무가당 저탄수"
    },
    days4to7: {
      shake: "쉐이크 3회",
      meal: "점심 1끼만",
      carbs: "하루 40-70g",
      fasting: day === 7 ? "24시간 단식 후보" : "12-14시간 공복"
    },
    week2: {
      shake: "쉐이크 2회",
      meal: "점심 저탄수·저녁 무탄수",
      carbs: "하루 60-100g",
      fasting: isSwitchFastingDay(day) ? "24시간 단식일" : "주 1회 단식"
    },
    week3: {
      shake: "쉐이크 2회",
      meal: "점심 저탄수·저녁 무탄수",
      carbs: "하루 80-150g",
      fasting: isSwitchFastingDay(day) ? "24시간 단식일" : "주 2회 단식"
    },
    week4: {
      shake: "쉐이크 2회",
      meal: "점심·저녁 저탄수",
      carbs: "하루 100-180g",
      fasting: isSwitchFastingDay(day) ? "24시간 단식일" : "주 3회 단식"
    }
  };
  return { phase, title: `DAY ${day} ${phaseTitles[phase]}`, ...rules[phase] };
}

function isSwitchFastingDay(day) {
  return [10, 16, 20, 22, 24, 26].includes(day);
}

function getDislikes() {
  const picked = checkedValues("input[name='dislike']");
  const custom = document
    .querySelector("#customDislikes")
    .value.split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  return [...picked, ...custom];
}

function scoreMeal(meal, goals, favorites) {
  const goalScore = goals.reduce((score, goal) => {
    let nextScore = score + (meal.tags.includes(goal) ? 4 : 0);
    if (goal === "highProtein" && meal.protein >= 35) nextScore += 2;
    if (goal === "lowCarb" && meal.carbs <= 25) nextScore += 2;
    if (goal === "balanced" && meal.protein >= 25 && meal.carbs >= 30 && meal.carbs <= 65) nextScore += 2;
    if (goal === "quick" && meal.items.length <= 3) nextScore += 2;
    return nextScore;
  }, 0);
  const favoriteScore = favorites.reduce(
    (score, favorite) => score + (meal.favorites.includes(favorite) ? 5 : 0),
    0
  );
  const focusScore = weeklyFocus.reduce((score, focus) => {
    if (meal.favorites.includes(focus)) return score + 3;
    const focusItems = focusIngredients[focus] || [];
    return score + (meal.items.some((item) => focusItems.some((focusItem) => item.includes(focusItem))) ? 2 : 0);
  }, 0);
  return goalScore + favoriteScore + focusScore;
}

function chooseMeal(type, offset = 0, dayOverride = null) {
  const { program, switchDay, goals, favorites, avoid, dislikes } = getPreferences();
  const activeDay = dayOverride || switchDay;
  if (program === "switchOn" && isSwitchFastingDay(activeDay) && type !== "dinner") {
    return fastingSlots[type];
  }
  const source = program === "switchOn" ? switchOnMeals[getSwitchPhase(activeDay)] : meals;
  const available = source[type].filter((meal) => {
    const avoidsCategory = meal.avoid.some((tag) => avoid.includes(tag));
    const hasDislikedIngredient = dislikes.some((dislike) =>
      meal.items.some((item) => item.includes(dislike))
    );
    return !avoidsCategory && !hasDislikedIngredient;
  });
  const pool = available.length ? available : source[type];
  const bestScore = Math.max(...pool.map((meal) => scoreMeal(meal, goals, favorites)));
  const preferred = pool.filter((meal) => scoreMeal(meal, goals, favorites) === bestScore);
  const index = Math.abs(Math.floor(Date.now() / 1000) + offset + type.length) % preferred.length;
  return preferred[index];
}

function buildDay(offset = 0, dayOverride = null) {
  return ["breakfast", "lunch", "dinner", "snack"].map((type, index) => ({
    type,
    ...chooseMeal(type, offset + index * 17, dayOverride)
  }));
}

function buildWeek() {
  const { program, switchDay } = getPreferences();
  weeklyFocus = getWeeklyFocus();
  if (program === "switchOn") {
    currentPlan = Array.from({ length: 7 }, (_, index) => {
      const dayNumber = Math.min(switchDay + index, 28);
      return {
        day: `DAY ${dayNumber}`,
        meals: buildDay(index * 41, dayNumber)
      };
    });
    return;
  }

  currentPlan = weekdays.map((day, index) => ({
    day: `${day}요일`,
    meals: buildDay(index * 41)
  }));
}

function getWeeklyFocus() {
  const { program, favorites } = getPreferences();
  if (program === "switchOn") {
    const base = favorites.filter((item) => ["chicken", "egg", "tofu", "fish", "pork", "rice"].includes(item));
    return (base.length ? base : ["chicken", "tofu", "egg"]).slice(0, 3);
  }

  const base = favorites.filter((item) => focusIngredients[item]);
  return (base.length ? base : ["chicken", "egg", "tofu", "rice"]).slice(0, 4);
}

function totals(dayMeals) {
  return dayMeals.reduce(
    (sum, meal) => ({
      kcal: sum.kcal + meal.kcal,
      protein: sum.protein + meal.protein,
      carbs: sum.carbs + meal.carbs,
      fat: sum.fat + meal.fat
    }),
    { kcal: 0, protein: 0, carbs: 0, fat: 0 }
  );
}

function renderTargets() {
  const { program, switchDay } = getPreferences();
  const { calories, protein } = calculateTargets();
  document.querySelector("#targetMetricLabel").textContent =
    program === "switchOn" ? "스위치온 DAY" : "권장 섭취";
  document.querySelector("#targetCalories").textContent =
    program === "switchOn" ? `DAY ${switchDay}` : `${calories.toLocaleString()} kcal`;
  document.querySelector("#targetProtein").textContent = `${protein} g`;
}

function renderProgramControls() {
  const isSwitchOn = document.querySelector("input[name='program']:checked").value === "switchOn";
  switchStageField.classList.toggle("is-visible", isSwitchOn);
  switchGuide.classList.toggle("is-visible", isSwitchOn);
  goalFieldset.classList.toggle("is-hidden", isSwitchOn);
  if (!isSwitchOn) return;
  const rules = getSwitchRules(Number(document.querySelector("#switchDay").value));
  document.querySelector("#switchGuideTitle").textContent = rules.title;
  document.querySelector("#shakeRule").textContent = rules.shake;
  document.querySelector("#mealRule").textContent = rules.meal;
  document.querySelector("#carbRule").textContent = rules.carbs;
  document.querySelector("#fastingRule").textContent = rules.fasting;
}

function renderPreferenceSummary() {
  const { goals, favorites, dislikes } = getPreferences();
  const goalDescriptions = {
    balanced: "균형식은 단백질과 탄수화물이 함께 있는 메뉴를 우선합니다",
    highProtein: "고단백은 단백질 35g 이상 메뉴에 가산점을 줍니다",
    lowCarb: "저탄수는 탄수화물 25g 이하 메뉴에 가산점을 줍니다",
    quick: "간편식은 재료 수가 적고 준비가 짧은 메뉴를 우선합니다"
  };
  const goalText = goals.map((goal) => goalDescriptions[goal]).join(". ");
  const favoriteText = favorites.length
    ? ` 선호 음식은 ${favorites.map((item) => favoriteLabels[item] || item).join(", ")} 순으로 더 잘 반영됩니다.`
    : " 선호 음식은 아직 선택하지 않았습니다.";
  const dislikeText = dislikes.length
    ? ` 제외 재료: ${dislikes.join(", ")}.`
    : " 제외 재료는 없습니다.";
  const focusText = weeklyFocus.length
    ? ` 이번 주 장보기는 ${weeklyFocus.map((item) => favoriteLabels[item] || item).join(", ")} 중심으로 묶습니다.`
    : "";

  preferenceSummary.textContent = `${goalText}.${favoriteText}${focusText}${dislikeText}`;
  dislikeStatus.textContent = dislikes.length
    ? `${dislikes.join(", ")}가 들어간 메뉴는 추천에서 제외됩니다.`
    : "직접 입력한 재료도 메뉴 재료명과 맞으면 제외됩니다.";
}

function renderToday() {
  const todayMeals = currentPlan[0].meals;
  mealList.innerHTML = todayMeals
    .map(
      (meal, index) => `
        <article class="meal-card">
          <header>
            <div>
              <span class="tag">${mealLabels[meal.type]}</span>
              <h2>${meal.name}</h2>
            </div>
            <span class="tag">${meal.kcal} kcal</span>
          </header>
          <div class="pill-row">
            ${meal.tags.map((tag) => `<span class="pill">${tagLabels[tag]}</span>`).join("")}
          </div>
          <ul>${meal.items.map((item) => `<li>${item}</li>`).join("")}</ul>
          <div class="macro-row">
            <span><b>${meal.protein}g</b>단백질</span>
            <span><b>${meal.carbs}g</b>탄수</span>
            <span><b>${meal.fat}g</b>지방</span>
          </div>
          <button class="swap" data-type="${meal.type}" data-index="${index}" type="button">이 메뉴만 교체</button>
        </article>
      `
    )
    .join("");

  const total = totals(todayMeals);
  const target = calculateTargets();
  document.querySelector("#prepLevel").textContent =
    total.kcal > target.calories + 180 ? "양 조절" : total.protein >= target.protein ? "고단백" : "보통";
}

function renderWeek() {
  weekPlan.innerHTML = currentPlan
    .map((day) => {
      const total = totals(day.meals);
      return `
        <article class="day-card">
          <h2>${day.day} <span class="tag">${total.kcal} kcal</span></h2>
          ${day.meals
            .map((meal) => `<p><strong>${mealLabels[meal.type]}</strong><br>${meal.name}</p>`)
            .join("")}
        </article>
      `;
    })
    .join("");
}

function renderShopping() {
  const items = getShoppingItems();
  shoppingList.innerHTML = items
    .map(({ item, amountText, countText }) => `<li><strong>${item}</strong><span>${amountText} · ${countText}</span></li>`)
    .join("");
}

function getShoppingItems() {
  const basket = new Map();
  currentPlan.flatMap((day) => day.meals).forEach((meal) => {
    Object.entries(meal.shop).forEach(([item, count]) => {
      basket.set(item, (basket.get(item) || 0) + count);
    });
  });

  return [...basket.entries()]
    .sort(([a], [b]) => a.localeCompare(b, "ko"))
    .map(([item, count]) => ({
      item,
      count,
      countText: `${count}회분`,
      amountText: estimateShoppingAmount(item, count)
    }));
}

function estimateShoppingAmount(item, count) {
  const rule = shoppingUnitRules.find((candidate) => candidate.pattern.test(item));
  if (!rule) return "필요량 확인";
  if (rule.unit === "소량") return count > 1 ? "소량 준비" : "소량";

  const total = rule.amount * count;
  if (rule.unit === "g") {
    return total >= 1000 ? `약 ${(total / 1000).toFixed(total % 1000 === 0 ? 0 : 1)}kg` : `약 ${total}g`;
  }

  if (rule.unit === "모") {
    return total % 1 === 0 ? `약 ${total}모` : `약 ${total.toFixed(1)}모`;
  }

  return `약 ${Math.ceil(total)}${rule.unit}`;
}

function exportShoppingCsv() {
  const rows = [["품목", "구매량", "계산 기준"], ...getShoppingItems().map(({ item, amountText, countText }) => [item, amountText, countText])];
  const csv = rows
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
    .join("\r\n");
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);
  link.href = url;
  link.download = `meal-mate-shopping-${date}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportShoppingMemo() {
  const { program, switchDay } = getPreferences();
  const title = program === "switchOn" ? `Meal Mate 장보기 메모 - 스위치온 DAY ${switchDay}` : "Meal Mate 장보기 메모";
  const shoppingLines = getShoppingItems().map(({ item, amountText, countText }) => `- ${item}: ${amountText} (${countText})`);
  const planLines = currentPlan.flatMap((day) => [
    "",
    `[${day.day}]`,
    ...day.meals.map((meal) => `- ${mealLabels[meal.type]}: ${meal.name}`)
  ]);
  const focusText = weeklyFocus.length
    ? `이번 주 장보기 집중 재료: ${weeklyFocus.map((item) => favoriteLabels[item] || item).join(", ")}`
    : "이번 주 장보기 집중 재료: 자동 구성";
  const text = [
    title,
    focusText,
    "",
    "[장보기]",
    ...shoppingLines,
    "",
    "[식단표]",
    ...planLines
  ].join("\r\n");
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);
  link.href = url;
  link.download = `meal-mate-shopping-memo-${date}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function renderAll() {
  renderProgramControls();
  renderPreferenceSummary();
  renderTargets();
  renderToday();
  renderWeek();
  renderShopping();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  buildWeek();
  renderAll();
});

document
  .querySelectorAll(
    "input[name='program'], input[name='goal'], input[name='favorite'], input[name='avoid'], input[name='dislike'], #switchDay"
  )
  .forEach((input) => {
    input.addEventListener("change", () => {
      if (input.name === "goal") syncGoalChoices(input);
      buildWeek();
      renderAll();
    });
  });

document.querySelector("#customDislikes").addEventListener("input", () => {
  buildWeek();
  renderAll();
});

document.querySelector("#shuffleDay").addEventListener("click", () => {
  currentPlan[0].meals = buildDay(Math.floor(Math.random() * 1000));
  renderAll();
});

exportShopping.addEventListener("click", exportShoppingCsv);
exportMemo.addEventListener("click", exportShoppingMemo);

mealList.addEventListener("click", (event) => {
  const button = event.target.closest(".swap");
  if (!button) return;
  const index = Number(button.dataset.index);
  currentPlan[0].meals[index] = {
    type: button.dataset.type,
    ...chooseMeal(button.dataset.type, Math.floor(Math.random() * 1000))
  };
  renderAll();
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-active"));
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-visible"));
    tab.classList.add("is-active");
    document.querySelector(`#${tab.dataset.view}View`).classList.add("is-visible");
  });
});

populateSwitchDays();
buildWeek();
renderAll();

function populateSwitchDays() {
  const select = document.querySelector("#switchDay");
  select.innerHTML = Array.from({ length: 28 }, (_, index) => {
    const day = index + 1;
    const rules = getSwitchRules(day);
    return `<option value="${day}">DAY ${day} · ${rules.title.replace(`DAY ${day} `, "")}</option>`;
  }).join("");
}

function syncGoalChoices(changedInput) {
  const balanced = document.querySelector("input[name='goal'][value='balanced']");
  const otherGoals = [...document.querySelectorAll("input[name='goal']:not([value='balanced'])")];

  if (changedInput.value === "balanced" && changedInput.checked) {
    otherGoals.forEach((input) => {
      input.checked = false;
    });
    return;
  }

  if (changedInput.value !== "balanced" && changedInput.checked) {
    balanced.checked = false;
  }

  if (!balanced.checked && otherGoals.every((input) => !input.checked)) {
    balanced.checked = true;
  }
}
