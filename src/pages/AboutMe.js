import React , {Fragment} from 'react'

export const AboutMe = () => {
     return (
     <Fragment>
          <h1>Информация</h1>
          <div className="jumbotron">
               <div className="container">
               <h1 className="display-4">React приложение на hooks</h1>
               <p className="lead">Приложение написал <strong>Шелест Ярослав</strong></p>
               <p className="lead">При разработке использовался фреймвор<strong> React.Js(only Hooks) / библиотека Bootsrap 4</strong></p>
               </div>
          </div>
     </Fragment>
     )
}