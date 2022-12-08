export default [
  {
    path: '/',
    value: 'trang chủ',
  },
  {
    path: '/san-pham',
    value: 'sản phẩm',
    children: [
      {
        path: '/danh-muc/figure',
        value: 'Figure',
      },
      {
        path: '/danh-muc/trang-phuc',
        value: 'Trang phục',
      },
      {
        path: '/danh-muc/do-luu-niem',
        value: 'đồ lưu niệm',
      },
    ],
  },
  {
    path: '/gioi-thieu',
    value: 'giới thiệu',
  },
  {
    path: '/lien-he',
    value: 'liên hệ',
  },
];
