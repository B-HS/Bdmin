import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Router = (routes: object[]) =>
    useRoutes([
        //@ts-ignore
        ...routes.map((val: { path: string; route: string; props: object }) => {
            const Comp = lazy(() => import(`/src/${val.route}.tsx`));
            return {
                path: val.path,
                element: <Comp params={val.props} />
            };
        })
    ]);

export default Router;
