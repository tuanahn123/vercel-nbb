// import path from './constants/path'

// import { useRoutes } from 'react-router-dom'

// const AboutPage = () => import('/about-page')

// export default function useRouteElements() {
//     const routeElements = useRoutes([
      
      
//       {
//         path: '',
//         element: <MainLayout />,
//         children: [
//           {
//             path: path.aboutPage,
//             element: (
//               <Suspense>
//                 <AboutPage />
//               </Suspense>
//             )
//           },
//           {
//             path: '',
//             index: true,
//             element: (
//               <Suspense>
//                 <ProductList />
//               </Suspense>
//             )
//           },
//           {
//             path: '*',
//             element: (
//               <Suspense>
//                 <NotFound />
//               </Suspense>
//             )
//           }
//         ]
//       }
//     ])
//     return routeElements
//   }