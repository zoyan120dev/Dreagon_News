import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import LatesNews from '../components/LatesNews'
import Navbar from '../components/Navbar'
import LeftAside from '../components/HomeLayout/LeftAside'
import RightAside from '../components/HomeLayout/RightAside'

function HomeLayout() {
  return (
    <div>
      <header>
        {" "}
        <Header />{" "}
      </header>
      <section className="w-11/12 mx-auto my-3 ">
        <LatesNews />
      </section>
      <nav className="w-11/12 mx-auto my-3">
        <Navbar />
      </nav>
      <main className="w-11/12 mx-auto my-10 grid grid-cols-12 gap-5">
        <aside className=" col-span-3 sticky top-0 h-fit">
          <LeftAside />
        </aside>
        <section className="col-span-6">
          <Outlet />
        </section>
        <section className="col-span-3 sticky top-0 h-fit">
          <RightAside />
        </section>
      </main>
    </div>
  );
}

export default HomeLayout