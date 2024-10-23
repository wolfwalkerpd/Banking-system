import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/totalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.acations'
import React from 'react'

const Home = async() => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className=' home'>
      <div className=' home-content'>
        <header className=' home-header'>
          <HeaderBox
          type="greeting"
          title="welcome"
          user={loggedIn?.name || 'guest'}
          subtext="Access and mange your account and transactions efficiently."
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
