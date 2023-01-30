import PetsItem from "components/PetsItem/PetsItem";

const PetsList = function () {
    const pets = [{
        id: 7676, name: "Johnny", date: Date.now(), breed: "dog", text: "jhjhjhj", img: "jhjh"
    },
    {
        id: 8787, name: "Jack", date: Date.now(), breed: "cat", text: "87878778", img: "jhjh"
    }]
    const isLoggedIn = true

    return (
        <>
        {isLoggedIn && pets.map(({ id, name, date, breed, text, img }) => {
            return <PetsItem key={id} id={id} name={name} date={date} breed={breed} text={text} img={img} />
        })}            
        
      
      {pets.length === 0 && (
        <p>There`s no pets yet</p>
      )}</>
    )
}

export default PetsList