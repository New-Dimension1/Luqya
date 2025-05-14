import { IMenu } from "@/types/menu-d-t";

const menu_data: IMenu[] = [
  // {
  //   id: 1,
  //   link: '/',
  //   title: 'الرئيسية',
  //   dropdown: true,
  //   dropdown_menus: [
  //     { link: '/', title: 'المالية' },
  //     { link: '/home-2', title: 'استشارات الأعمال' },
  //     { link: '/home-3', title: 'الخدمات المصرفية' },
  //     { link: '/home-4', title: 'حلول الدفع' },
  //     { link: '/home-5', title: 'الوكالة الرقمية' },
  //     { link: '/home-6', title: 'التسويق' },
  //     { link: '/home-7', title: 'التأمين' },
  //   ]
  // },
    {
    id: 1,
    link: '/',
    title: 'الرئيسية'
  },
  {
    id: 2,
    link: '/about-us',
    title: 'الصفحات',
    mega_menu: true,
    mega_menus: [
      {
        id: 1,
        menus: [
          { link: '/service-v1', title: 'الخدمات - إصدار 1' },
          { link: '/service-v2', title: 'الخدمات - إصدار 2' },
          { link: '/service-details', title: 'تفاصيل الخدمة' },
          { link: '/team-v1', title: 'الفريق - إصدار 1' },
          { link: '/team-v2', title: 'الفريق - إصدار 2' },
          { link: '/team-details', title: 'تفاصيل الفريق' }
        ]
      },
      {
        id: 2,
        menus: [
          { link: '/about-us', title: 'من نحن - إصدار 1' },
          { link: '/about-us-2', title: 'من نحن - إصدار 2' },
          { link: '/testimonial', title: 'آراء العملاء' },
          { link: '/pricing', title: 'الأسعار' },
          { link: '/faq', title: 'الأسئلة الشائعة' },
          { link: '/404', title: 'صفحة غير موجودة' },
        ]
      },
      {
        id: 3,
        menus: [
          { link: '/project-v1', title: 'المشاريع - إصدار 1' },
          { link: '/project-v2', title: 'المشاريع - إصدار 2' },
          { link: '/project-v3', title: 'المشاريع - إصدار 3' },
          { link: '/project-details-v1', title: 'تفاصيل المشروع - إصدار 1' },
          { link: '/project-details-v2', title: 'تفاصيل المشروع - إصدار 2' },
        ]
      }
    ]
  },
  {
    id: 3,
    link: '/shop',
    title: 'المتجر',
    dropdown: true,
    dropdown_menus: [
      { link: '/shop', title: 'المتجر' },
      { link: '/shop-details', title: 'تفاصيل المنتج' },
      { link: '/cart', title: 'سلة المشتريات' },
      { link: '/wishlist', title: 'المفضلة' },
      { link: '/checkout', title: 'إتمام الشراء' },
    ]
  },
  {
    id: 4,
    link: '/blog',
    title: 'المدونة',
    dropdown: true,
    dropdown_menus: [
      { link: '/blog', title: 'قائمة المقالات' },
      { link: '/blog-grid', title: 'شبكة المقالات' },
      { link: '/blog-details', title: 'تفاصيل المقال' },
    ]
  },
  {
    id: 5,
    link: '/contact',
    title: 'اتصل بنا'
  }
];

export default menu_data;
