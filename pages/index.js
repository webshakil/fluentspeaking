import { MobileOutlined } from '@ant-design/icons';
import Link from "next/link";
export default function Home() {
  return (
    <div className="container">
            <div className="container-fluid mt-4 p-5 bg-primary text-white rounded ">
              <div className="row">
                <div className="col text-center">
                  <h1>আপনি কি ইংলিশে ৩০ মিনিট  থেকে ১ ঘন্টা Fluently কথা বলতে চান?<br/> তাহলে নিচের ভিডিও টি আপনার জন্য।</h1>
                
                </div>
              </div>
            </div>

      <div className="container-fluid pt-5 ">
        <div className="row">
          <div className="col text-center">
            <div className="ratio ratio-16x9">
                    <iframe
                        src="https://www.youtube.com/embed/rCYH39zpEho" 
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="video"
                        width="853"
                        height="480"
                  />


               </div>
           </div>
         </div>
      </div>

      <div className="container-fluid pt-5 ">
        <div className="row">
          <div className="col text-center">
           
              <h1>আমাদের সম্পর্কে জানতে আমাদের এই ইংলিশ স্পিকিং গ্রুপে জয়েন করুন </h1>
                    <Link href="https://www.facebook.com/EnglishWithShakil">   
                       <a  className="h1 text-success"target="_blank">Learning and practicing English</a>
                      </Link><br/>

                      {/* <Link  href="https://www.facebook.com/5-min-English-Speaking-Challenge-109377711639957">   
                       <a  className="h1 text-success pt-5"target="_blank">5 min English Speaking Challenge</a>
                      </Link> */}

                      
              </div>
        </div>
      </div>

  

     <div className="cotainer pt-5">
       <div className="row">
       <h1 className="text-center">এই ভিডিও গুলো দেখলে ও আমাদের সম্পর্কে আইডিয়া পাবেন। </h1>
         <div className="col-md-6 pt-5">
       
          <iframe
              src="https://www.youtube.com/embed/HhqmaKn3_tE" 
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              width="500"
              height="480"
            
         />


         </div>
         <div className="col-md-6 pt-5">
              
          <iframe
              src="https://www.youtube.com/embed/7cYPdZvJmCs" 
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              width="500"
              height="480"
            
         />


         </div>

         <div className="col-md-6 pt-5">
              
              <iframe
                  src="https://www.youtube.com/embed/2DDwFV9ZSks" 
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                  width="500"
                  height="480"
                
             />
             </div>

             

             <div className="col-md-6 pt-5">
              
              <iframe
                  src="https://www.youtube.com/embed/JPprPQpFylc" 
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                  width="500"
                  height="480"
                
             />


             </div>
       </div>
     </div>

     <div className="container pt-5">
       <div className="row">
         <div className="col ">
           <h1 className="text-center text-danger">কোর্সের বৈশিষ্ট্য  </h1><br/>
           <h3 className="text-start text-secondary">১। রেগুলার ইংলিশে কথা না বললে কোনো দিনই Fluency আসবে না। তাই আমার তত্ত্বাবধানে বাদ্ধতা মূলক ৩০ মিনিট থেকে ১ ঘন্টা কথা বলতে হবে, এবং আমাকে রেকর্ড করে দেখাতে হবে। লজ্জা সরম ভাঙতে হবে। </h3><br/>
           <h3 className="text-start text-info">২। কথা বলার জন্য প্রয়োজনীয় ভোকাবুলারি এবং অন্যান্য জিনিস আমি শিখিয়ে দিবো। </h3><br/>
           <h3 className="text-start text-primary">৩।এইভাবে ১/২ মাস প্রাকটিস করলে আপনার Fluency দেখলে  আপনিই অবাক্ হয়ে যাবেন।
 </h3><br/>
           <h3 className="text-start">
           ৪। জ্যুমে একজন বা ২ জনের সাথে গ্রুপ করে দেয়া হবে।  </h3><br/>
            <h3 className="text-start text-success">৫। সহজেই ৫০০০+ ভোকাবুলারি শিখে ফেলার টেকনিক দেখানো হবে । </h3><br/>
            <h3 className="text-start text-info">৬। গ্রামার আলাদা ভাবে খুব বেশি শেখার প্রয়োজন হবেনা । </h3>
         </div>
       </div>
     </div>


     <div className="container pt-5">
       <div className="row">
       <div className="col ">
           <h1 className="text-center text-danger">কোর্স ফী কত? </h1><br/>
           <h3 className="text-start text-secondary">১। কোর্স ফী ৫০০০ টাকা, বাট  আর্লি বার্ড ডিসকাউন্ট ৬০% অর্থাৎ বর্তমানে ফী ২০৪০ টাকা।  </h3><br/>
           <h3 className="text-start text-info">২। আপনার যদি একান্তই সমস্যা থাকে তবে আপনি টাকাটা কিস্তিতে ও দিতে পারবেন। সেক্ষেত্রে ফী ২৫০০ টাকা, অর্থাৎ এককালীন দিলে ২০৪০ টাকা, ২ কিস্তিতে দিলে ২৫০০ টাকা। প্রথম মাসে ১২৫০ ও দ্বিতীয় মাসে ১২৫০ টাকা। </h3><br/>
           <h3 className="text-start text-primary">৩। কোর্সের মেয়াদ ৩ মাস। </h3><br/>
           <h3 className="text-start text-danger">৪। ক্লাস হবে জুমে রাতে বা দিনে, কোনো রেকর্ডেড ক্লাস দেয়া হবেনা । </h3><br/>
           <h3 className="text-start text-info">৫। ডিসকাউন্ট থাকবে ৩১/০৫/২০২২ ইং পর্যন্ত। এর পর কোর্স ফী আবার ৫০০০ টাকা হয়ে যাবে। </h3><br/>
           
           

         </div>
       </div>
     </div>

     <div className="container pt-5">
       <div className="row">
         <div className="col">
           <h1 className="text-center">If you have any more queries,<br/><span className="text-warning pt-5"> Feel free to reach out </span><br/> <MobileOutlined /> 01768-001023</h1>
         </div>
       </div>
     </div>

     
</div>

    
   
  )
}
