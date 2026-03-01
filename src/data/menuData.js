// 풍덕천두꺼비집 메뉴 데이터
export const menuData = [
    // === 시그니처 / BEST ===
    {
        id: 1,
        name: '오봉고추치킨',
        description: '두꺼비집 시그니처! 매콤달콤한 고추양념의 바삭한 프라이드치킨',
        price: 22000,
        category: ['best', 'chicken'],
        isBest: true,
        isRainPick: false,
        emoji: '🌶️',
        image: '/gochu_chicken.png'
    },
    {
        id: 2,
        name: '경주 한우 물회',
        description: '신선한 경주 한우를 시원한 육수에 말아낸 프리미엄 물회',
        price: 28000,
        category: ['best', 'seafood'],
        isBest: true,
        isRainPick: false,
        emoji: '🥩',
        image: '/hanwoo_mulhoe.png'
    },
    {
        id: 3,
        name: '숯불돼지갈비',
        description: '참숯에 구워 육즙이 살아있는 특제 양념 돼지갈비',
        price: 25000,
        category: ['best', 'grill'],
        isBest: true,
        isRainPick: false,
        emoji: '🔥',
        image: '/pork_ribs.png'
    },
    {
        id: 4,
        name: '양푼떡볶이 차돌',
        description: '고소한 차돌박이를 듬뿍 올린 양푼 가득 매콤 떡볶이',
        price: 18000,
        category: ['best', 'stew'],
        isBest: true,
        isRainPick: true,
        emoji: '🍲',
        image: '/chadol_tteokbokki.png'
    },
    {
        id: 5,
        name: '안면도 조개탕',
        description: '안면도산 싱싱한 조개를 듬뿍 넣어 끓인 시원한 해물탕',
        price: 22000,
        category: ['best', 'stew', 'seafood'],
        isBest: true,
        isRainPick: true,
        emoji: '🐚',
        image: '/jogaetang.png'
    },

    // === 치킨/구이류 ===
    {
        id: 6,
        name: '오봉파닭',
        description: '아삭한 대파와 함께 즐기는 바삭한 파닭',
        price: 22000,
        category: ['chicken'],
        isBest: false,
        isRainPick: false,
        emoji: '🍗',
        image: '/obong_padak.png'
    },
    {
        id: 7,
        name: '오봉양파닭',
        description: '달콤한 양파소스에 버무린 크리스피 치킨',
        price: 22000,
        category: ['chicken'],
        isBest: false,
        isRainPick: false,
        emoji: '🧅',
        image: '/onion_chicken.png'
    },
    {
        id: 8,
        name: '숯불고추장불고기',
        description: '매콤한 고추장 양념에 재운 돼지불고기를 숯불에',
        price: 20000,
        category: ['grill'],
        isBest: false,
        isRainPick: false,
        emoji: '🥘',
        image: '/gochujang_bulgogi.png'
    },
    {
        id: 11,
        name: '직화삼겹두부김치',
        description: '직화로 구운 삼겹살과 두부, 김치의 완벽한 조화',
        price: 20000,
        category: ['grill'],
        isBest: false,
        isRainPick: true,
        emoji: '🥓',
        image: '/tofu_kimchi.png'
    },
    {
        id: 9,
        name: '숯불닭갈비 소금',
        description: '참숯에 담백하게 구운 닭갈비, 소금 시즈닝',
        price: 20000,
        category: ['grill', 'chicken'],
        isBest: false,
        isRainPick: false,
        emoji: '🧂',
        image: '/dakgalbi_salt.png'
    },
    {
        id: 10,
        name: '숯불닭갈비 양념',
        description: '매콤달콤 특제양념에 숯불향을 입힌 닭갈비',
        price: 20000,
        category: ['grill', 'chicken'],
        isBest: false,
        isRainPick: false,
        emoji: '🔥',
        image: '/dakgalbi_spicy.png'
    },
    {
        id: 12,
        name: '직화돼지껍데기',
        description: '불맛 가득한 직화 돼지껍데기, 쫄깃한 식감',
        price: 16000,
        category: ['grill'],
        isBest: false,
        isRainPick: false,
        emoji: '🫕',
        image: '/pork_skin.png'
    },
    {
        id: 13,
        name: '직화닭발',
        description: '매콤하게 양념한 닭발을 직화로 구워 더 맛있게',
        price: 16000,
        category: ['grill'],
        isBest: false,
        isRainPick: false,
        emoji: '🦶',
        image: '/dakbal.png'
    },

    // === 회/해산물 ===
    {
        id: 14,
        name: '경주한우육회',
        description: '신선한 경주 한우를 참기름, 배와 함께 즐기는 육회',
        price: 26000,
        category: ['seafood'],
        isBest: false,
        isRainPick: false,
        emoji: '🥩',
        image: '/hanwoo_yukhoe.png'
    },
    {
        id: 15,
        name: '울릉도 오징어숙회',
        description: '울릉도산 싱싱한 오징어를 살짝 데쳐 탱글탱글하게',
        price: 18000,
        category: ['seafood'],
        isBest: false,
        isRainPick: false,
        emoji: '🦑',
        image: '/squid_sukhoe.png'
    },
    {
        id: 16,
        name: '오징어입튀김',
        description: '오징어 입 부분만 모아 바삭하게 튀긴 특별 안주',
        price: 14000,
        category: ['seafood'],
        isBest: false,
        isRainPick: true,
        emoji: '🍤',
        image: '/squid_mouth_fried.png'
    },
    {
        id: 17,
        name: '벌교꼬막무침',
        description: '벌교산 뻘꼬막을 새콤달콤 양념에 무쳐낸 별미',
        price: 18000,
        category: ['seafood'],
        isBest: false,
        isRainPick: false,
        emoji: '🐚',
        image: '/komak.png'
    },
    {
        id: 18,
        name: '을지로 골뱅이파무침',
        description: '을지로 스타일, 골뱅이와 대파를 매콤하게 무쳤습니다',
        price: 16000,
        category: ['seafood'],
        isBest: false,
        isRainPick: true,
        emoji: '🐌',
        image: '/golbaeng-i.png'
    },

    // === 탕/찌개 ===
    {
        id: 19,
        name: '서면오뎅탕',
        description: '부산 서면 스타일 깊은 국물의 어묵탕',
        price: 14000,
        category: ['stew'],
        isBest: false,
        isRainPick: true,
        emoji: '🍢',
        image: '/odentang.png'
    },
    {
        id: 20,
        name: '양푼짬뽕탕 오징어',
        description: '얼큰한 짬뽕 국물에 통오징어를 넣어 시원하게',
        price: 18000,
        category: ['stew'],
        isBest: false,
        isRainPick: true,
        emoji: '🌶️',
        image: '/jjambbong.png'
    },

    // === 사이드/기타 ===
    {
        id: 21,
        name: '꿀토마토',
        description: '달콤한 꿀에 절인 방울토마토, 새콤달콤 디저트 안주',
        price: 10000,
        category: ['side'],
        isBest: false,
        isRainPick: false,
        emoji: '🍅',
        image: '/honey_tomato.png'
    }
];

// Category definitions
export const categories = [
    { id: 'best', label: '정릉점 인기 Best 5' },
    { id: 'rain', label: '비 오는 날 추천' },
    { id: 'chicken', label: '치킨/구이류' },
    { id: 'seafood', label: '회/해산물' },
    { id: 'stew', label: '탕/찌개' },
    { id: 'all', label: '전체 메뉴' }
];

// Filter function
export function getMenuByCategory(categoryId) {
    if (categoryId === 'all') return menuData;
    if (categoryId === 'best') return menuData.filter(m => m.isBest);
    if (categoryId === 'rain') return menuData.filter(m => m.isRainPick);
    return menuData.filter(m => m.category.includes(categoryId));
}
