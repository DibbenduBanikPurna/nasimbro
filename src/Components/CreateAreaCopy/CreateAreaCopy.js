import React from 'react'

export default function CreateAreaCopy() {
    const [areaCopy,setAreaCopy]=useState({})

    const handleChange=(e)=>{
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...areaCopy };
        newData[field] = value
        setAreaCopy(newData)
    }

    const handleSUbmit=(e)=>{
        e.perventDefault();
        const body={
            name:areaCopy.name,
            region:areaCopy.region
        }
        axios.post('https://staging-api.erpxbd.com/api/v1/region',body).then(res=>console.log(res.data)).catch(err=>console.log(err))
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-3 m-auto'>
                <h2> Create-Area-Copy</h2>
                <form onSubmit={handleSUbmit}>
                <input type="text" name="name" onChange={handleChange}  placeholder='Enter Name'/>
                    <input type="text" name="region" onChange={handleChange}  placeholder='Enter Region'/>
                    <input type='submit' value="submit"/>


                </form>
            </div>
        </div>
       </div>
  )
}
