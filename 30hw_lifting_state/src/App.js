import * as React from 'react'
import style from './index.module.css'

function Name({name, onNameChange}) {
    return (
        <div>
            <label className={style.field_title} htmlFor="name">Name: </label>
            <input
                className={style.field}
                id="name" value={name}
                onChange={onNameChange} />
        </div>
    )
}

function FavoriteAnimal({animal, onAnimalChange}) {
    return (
        <div>
            <label className={style.field_title} htmlFor="animal">Favorite animal: </label>
            <input
                className={style.field}
                id="animal"
                value={animal}
                onChange={onAnimalChange}
            />
        </div>
    )
}

function Display({name, animal}) {
  return <div className={style.result_message}>{`Эй, ${name}, твое любимое животное — ${animal}!`}</div>
}

function App() {
    const [animal, setAnimal] = React.useState('')
    const [name, setName] = React.useState('')

    return (
        <form className={style.form}>
            <Name name={name} onNameChange={event => setName(event.target.value)} />
            <FavoriteAnimal  animal={animal} onAnimalChange={event => setAnimal(event.target.value)}/>
            { (name && animal) && <Display name={name} animal={animal}/> }
        </form>
    )
}

export default App
