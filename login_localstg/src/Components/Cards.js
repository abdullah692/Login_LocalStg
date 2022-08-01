import React, { useEffect, useState } from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import TextField from '@mui/material/TextField';
import CardsView from './CardsView';

function Cards() {

  const CardLS = () => {
    const value = localStorage.getItem('cards')

    if (value) {
      console.log(value);
      return JSON.parse(value);
    }
    else {
      return [];
    }
  }

  // const CardsData=JSON.parse(localStorage.getItem('Cards'))
  const [cards, setCards] = useState(CardLS());
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');


  const delete_btn = ((id) => {
    console.log(id);
    const filter_cards = cards.filter((value, index) => {
      console.log(value.id)
      return index !== id;
    })
    setCards(filter_cards);
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    let values = {
      title,
      desc
    }
    // console.log('Data3',data);
    setCards([...cards, values])
    setTitle('')
    setDesc('')
  }

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])

  return (
    <div >
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'row', margin: 20, padding: 20, justifyContent: 'space-evenly' }}>
        <form onSubmit={handleSubmit}>
          <TextField label="Enter Title" size="small" required
            value={title} onChange={(e) => setTitle(e.target.value)}
            style={{ width: '300px' }} variant="filled" 
          />

          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Enter Description"
            style={{
              width: 400, height: 40, backgroundColor: 'transparent'
              , fontSize: '15px', fontFamily: 'sans-serif', marginLeft: 50,
            }}
            value={desc} onChange={(e) => setDesc(e.target.value)}
            required
          />
          <div style={{display:'inline-flex' , position:'absolute' , marginLeft:'40px'}}>
            <Button variant="contained" type='submit' >SUBMIT</Button>
          </div>
        </form>
        

      </div>
      <div>
        <CardsView cards={cards} deleteCard={delete_btn} />
      </div>

    </div>
  )
}

export default Cards