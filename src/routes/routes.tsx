import { BrowserRouter, Route } from 'react-router-dom'
import { Content } from '../pages/Content'
import { Landing } from '../pages/Landing'

export function Routes(){
  return(
    <BrowserRouter>
      <Route component={Landing} path="/" exact/>
      <Route component={Content} path="/content" exact/>
    </BrowserRouter>
  )
}