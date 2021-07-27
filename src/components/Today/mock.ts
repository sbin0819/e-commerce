export const mockData = {
  shortInfo: ['20평대', '모던 스타일', '빌라&연립'],
  mainImg: '/static/home/picture/p_4.jpg',
  subImg: {
    c_01: '/static/home/cate/cate_01.png',
    c_02: '/static/home/cate/cate_02.jpg',
    c_03: '/static/home/cate/cate_03.jpg',
  },
  tags: [
    { id: '1', title: '미니멀라이프' },
    { id: '2', title: '모던' },
    { id: '3', title: '책상' },
    { id: '4', title: '재택근무' },
    { id: '5', title: '여름인테리어' },
  ],
}

export const mockComment = [
  {
    id: '1',
    username: '철수',
    comment: '와 너무 이뻐요!',
    like: 1,
    subComment: [],
  },
  {
    id: '2',
    username: '영희',
    comment: '카페 같아요',
    like: 0,
    subComment: [],
  },
  {
    id: '3',
    username: '영희',
    comment: '너무 이쁜 공간이네요',
    like: 0,
    subComment: [{ id: '5', username: '민수', comment: '222', like: 0 }],
  },
]
