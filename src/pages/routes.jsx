import { IonPage, IonRouterOutlet } from '@ionic/react'
import { Route } from 'react-router'
import Filter from '../components/filter/filter'
import Auth from './auth'
import Login from './auth/login'
import Register from './auth/register'
import Tabs from './tabs'





const Routes = ({ match, history }) => {
  return (
    <IonPage>
        <Filter/>
        <IonRouterOutlet id="main">
        <Route
          exact={true}
          path={match.url}
          component={Auth}
        />
        <Route path="/login" component={Login} />
        <Route path="/registro" component={Register} />
      </IonRouterOutlet>

    </IonPage>
  )
}

export default Routes