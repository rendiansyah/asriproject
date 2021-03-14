import React from 'react'

const Input = (props) =>
(<>
<input 
        type="buton" 
        onClick={props._ubahNama} 
        value="Klik untuk mengubah nama"
        />
        <br></br>
        <label>Nama Baru: </label>
        <input
        type="text"
        onBlur = {(event) => props._ubahNama2(event.target.value)}
        />
        <br></br>
        <label>Umur Baru: </label>
        <input
        type="number"
        onBlur = {(event) => props._ubahUmur2(event.target.value)}
        />
</>
)

export default Input;