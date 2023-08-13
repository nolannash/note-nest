export default function Home() {
  return (
    <div className="inline-grid grid-cols-3 w-full h-full flex-wrap justify-items items-center text-center text-lg items-stretch overflow-auto pb-12">
      <div className='border-white border-solid border p-2 resize-x overflow-y-auto'>
        home page (when no user logged in) <br/>
        note has date created and optional due date user is able to filter/sort/search through all of these 
      </div>
      <div className='border-white border-solid border p-2 resize-x overflow-y-auto'>
        Each <br/> of <br/> these <br/> divs <br/> will <br/> look <br/> kind <br/> of <br/> like <br/> what <br/> the <br/> final <br/> site <br/> is <br/> expected <br/> to <br/> look <br/> like <br/> User <br/> can <br/> create <br/> threads <br/> and <br/> tags <br/> notes <br/> are <br/> in <br/> a <br/> thread <br/> and <br/> can have many tags  <br/> 
      </div>
      <div className='border-white border-solid border p-2 resize-x overflow-y-auto'> 
        The user will get taken to the actual homepage once they sign in or create a profile
      </div>
    </div>
  )
}
