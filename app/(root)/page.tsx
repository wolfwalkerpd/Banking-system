import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/totalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstname: 'Javad',}
  return (
    <section className=' home'>
      <div className=' home-content'>
        <header className=' home-header'>
          <HeaderBox
          type="greeting"
          title="welcome"
          user={loggedIn?.firstname || 'guest'}
          subtext="Acess and mange your acount and transactions efficiently."
          />
          <TotalBalanceBox acounts={[]} totalBanks={1} totalCurrentBalance={1250.25} />
        </header>
      </div>
    </section>
  )
}

export default Home
