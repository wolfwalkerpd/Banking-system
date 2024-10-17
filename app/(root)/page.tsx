import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/totalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstname: 'Javad', lastName: 'Samadi', email:'contactus@gmail.com'}
  return (
    <section className=' home'>
      <div className=' home-content'>
        <header className=' home-header'>
          <HeaderBox
          type="greeting"
          title="welcome"
          user={loggedIn?.firstname || 'guest'}
          subtext="Acess and mange your account and transactions efficiently."
          />
          <TotalBalanceBox acounts={[]} totalBanks={1} totalCurrentBalance={1250.25} />
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 123.50},{currentBalance: 176.5}]}
      />
    </section>
  )
}

export default Home
