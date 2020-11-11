/**
 * Creates the index file for the React App
 * @param title The title of the project
 */

const reactIndex = (title: string) =>

`
import * as React from 'react';
import {render} from 'react-dom';
import './index.scss'

const App = () => {
  return(
    <React.Fragment>
      <h1>${title} was made using Project Builder</h1>
    </React.Fragment>
  )
}

render(<App/>,window.document.getElementById('root'));
`

export default reactIndex