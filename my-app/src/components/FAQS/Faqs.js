import React, { useState } from 'react'

import { faqsdata } from './Data'
import Faq from './Faq'

const Faqs = () => {
    const [faqs, setFaqs] = useState(faqsdata);


  return (
    <main>
        <section>
            <h1> FAQs</h1>
            {faqs.map((faq)=>(<Faq  key={faq.id} faq={faq}/> ) )}
        </section>
    </main>
  )
}

export default Faqs