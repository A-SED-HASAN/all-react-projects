import React from 'react'
import Card from './Card'

import {
  navJpg,
  noteJpg,
  emoji,
  ticTacToe,
  movie,
  markdown,
  quiz,
  news,
  github,
  microsoft,
  picator,
  wine,
  sudoku,
  everyDollar,
} from './Assets/image'

import {
  FaBirthdayCake,
  FaRegNewspaper,
  MdBorderColor,
  MdRestaurantMenu,
  MdTableRows,
  MdOutlineLocalGroceryStore,
  MdOutlineQuiz,
  BiTrip,
  RiQuestionMark,
  VscSymbolColor,
  SlMagnifier,
  TfiLayoutSlider,
  FcTodoList,
  BsEmojiSunglasses,
  BsMarkdown,
  HiBars3,
  SlNote,
  IoGameControllerOutline,
  RiMovie2Fill,
  FiGithub,
  TiTickOutline,
  FiImage,
  BiWine,
  BsGrid3X3,
  BiDollar,
} from './Assets/icon'

function App() {
  return (
    <section className='section'>
      <div className='title'>
        <h1>my projects</h1>
        <div></div>
      </div>
      <div className='container'>
        <Card
          icon={<FaBirthdayCake />}
          to='https://project-1-reminder.netlify.app/'
          name='Birthday Reminder'
          img='https://react-projects.netlify.app/_next/image?url=https%3A%2F%2Fimages2.imgbox.com%2F98%2F62%2Fg93vTpfT_o.png&w=1920&q=75'
        />
        <Card
          icon={<MdBorderColor />}
          to='https://project-2-lorem-maker.netlify.app/'
          name='Lorem Ipsum maker'
          img='https://react-projects.netlify.app/_next/image?url=https%3A%2F%2Fimages2.imgbox.com%2F38%2F10%2FSnOA8qsl_o.png&w=1920&q=75'
        />
        <Card
          icon={<BiTrip />}
          to='https://project-3-tours.netlify.app/'
          name='Tours'
          img='https://react-projects.netlify.app/_next/image?url=https%3A%2F%2Fimages2.imgbox.com%2Fd6%2F70%2FqV8zWtnf_o.png&w=1920&q=75'
        />
        <Card
          icon={<RiQuestionMark />}
          to={'https://project-4-q-and-a.netlify.app/'}
          name={'Question and Answer'}
          img={
            'https://react-projects.netlify.app/_next/image?url=https%3A%2F%2Fimages2.imgbox.com%2F5c%2F2f%2Fmmb7Isik_o.png&w=1920&q=75'
          }
        />
        <Card
          icon={<VscSymbolColor />}
          to={'https://project-5-color-generator.netlify.app/'}
          name={'Color Generator'}
          img={
            'https://react-projects.netlify.app/_next/image?url=https%3A%2F%2Fimages2.imgbox.com%2Fb0%2F37%2FMcmtRgLI_o.png&w=640&q=75'
          }
        />
        <Card
          icon={<MdRestaurantMenu />}
          to={'https://project-6-filtered-menu.netlify.app/'}
          name={'Filtered menu'}
          img={
            'https://react-projects.netlify.app/_next/image?url=https%3A%2F%2Fimages2.imgbox.com%2Fca%2Fb2%2FyZtfh9OR_o.png&w=1920&q=75'
          }
        />
        <Card
          icon={<MdTableRows />}
          to={'https://project-7-three-tabs.netlify.app/'}
          name={'Tabs'}
          img={
            'https://react-projects.netlify.app/_next/image?url=https%3A%2F%2Fimages2.imgbox.com%2F32%2Fed%2F8cWN4XI6_o.png&w=1920&q=75'
          }
        />
        <Card
          icon={<SlMagnifier />}
          to={'https://project-8-reviews.netlify.app/'}
          name={'Reviews'}
          img={
            'https://react-projects.netlify.app/_next/image?url=https%3A%2F%2Fimages2.imgbox.com%2F34%2F44%2FTmn1BsxH_o.png&w=1920&q=75'
          }
        />
        <Card
          icon={<TfiLayoutSlider />}
          to={'https://project-9-slider.netlify.app/'}
          name={'Slider'}
          img={
            'https://react-projects.netlify.app/_next/image?url=https%3A%2F%2Fimages2.imgbox.com%2Fee%2F68%2FPsCvWq8Q_o.png&w=828&q=75'
          }
        />
        <Card
          icon={<FcTodoList />}
          to={'https://project-10-to-do.netlify.app/'}
          name={'Todo'}
          img={'https://www.linkpicture.com/q/todo_2.png'}
        />
        <Card
          icon={<MdOutlineLocalGroceryStore />}
          to={'https://project-11-grocery-bud.netlify.app/'}
          name={'Grocery Bud'}
          img={
            'https://react-projects.netlify.app/_next/image?url=https%3A%2F%2Fimages2.imgbox.com%2Fdf%2F5a%2F5xofK5om_o.png&w=640&q=75'
          }
        />
        <Card
          icon={<HiBars3 />}
          to={'https://project-12-navbar.netlify.app/'}
          name={'Nav Bar'}
          img={navJpg}
        />
        <Card
          icon={<SlNote />}
          to={'https://project-13-note-app.netlify.app/'}
          name={'Note App'}
          img={noteJpg}
        />
        <Card
          icon={<BsEmojiSunglasses />}
          to={'https://project-14-search-emoji.netlify.app/'}
          name={'Search Emoji'}
          img={emoji}
        />
        <Card
          icon={<IoGameControllerOutline />}
          to='https://project-15-tic-tac-toe.netlify.app/'
          name='tic tac toe'
          img={ticTacToe}
        />
        <Card
          icon={<RiMovie2Fill />}
          to='https://project-16-movie-finder.netlify.app'
          name='movie finder'
          img={movie}
        />
        <Card
          icon={<BsMarkdown />}
          to='https://project-17-mark-down.netlify.app/'
          name='markdown'
          img={markdown}
        />
        <Card
          icon={<MdOutlineQuiz />}
          to='https://project-18-quiz.netlify.app/'
          name='quiz'
          img={quiz}
        />
        <Card
          icon={<FaRegNewspaper />}
          to='https://project-19-search-news.netlify.app'
          name='news'
          img={news}
        />
        <Card
          icon={<FiGithub />}
          to='https://project-20-search-github-user.netlify.app'
          name='github user'
          img={github}
        />
        <Card
          icon={<TiTickOutline />}
          to='https://project-21-microsoft-todo.netlify.app/'
          name='microsoft todo'
          img={microsoft}
        />
        <Card
          icon={<FiImage />}
          to='https://project-22-picator.netlify.app/'
          name='picator'
          img={picator}
        />
        <Card
          icon={<BiWine />}
          to='https://project-23-wine-finder.netlify.app/'
          name='wine finder'
          img={wine}
        />
        <Card
          icon={<BsGrid3X3 />}
          to='https://project-24-sudoku.netlify.app/'
          name='sudoku'
          img={sudoku}
        />
        <Card
          icon={<BiDollar />}
          to='https://project-25-every-dollar.netlify.app/'
          name='every dollar'
          img={everyDollar}
        />
        <Card
          icon={<TiTickOutline />}
          to='#'
          name='store'
          img='https://i.pinimg.com/474x/70/9c/2f/709c2fb9d74ddc87ccab6eb4341f888e.jpg'
        />
        <Card
          icon={<TiTickOutline />}
          to='#'
          name='market'
          img='https://i.pinimg.com/474x/70/9c/2f/709c2fb9d74ddc87ccab6eb4341f888e.jpg'
        />
      </div>
    </section>
  )
}

export default App
