export default function Home() {
  return (
    <div className="inline-grid grid-cols-3 w-full h-full flex-wrap justify-items items-center divide-x divide-solid divide-white text-center text-lg ">
      <div className='h-full '>
        home page (when no user logged in) <br/>
        note has date created and optional due date user is able to filter/sort/search through all of these 
      </div>
      <div className='h-full'>
        Each <br/> of <br/> these <br/> divs <br/> will <br/> look <br/> kind <br/> of <br/> like <br/> what <br/> the <br/> final <br/> site <br/> is <br/> expected <br/> to <br/> look <br/> like <br/> User <br/> can <br/> create <br/> threads <br/> and <br/> tags <br/> notes <br/> are <br/> in <br/> a <br/> thread <br/> and <br/> can  have many tags  <br/> 
      </div>
      <div className='h-full'> 
        The user will get taken to the actual homepage once they sign in or create a profile
      </div>
    </div>
  )
}
