import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ImageOne from '../../public/calender/one.png'

const NeuralNetwork: NextPage = () => {
  
  const codeOne: string = `
  def findFirstDayOfYear(self):
    start = 1900
    curr_day = 0
    for i in range(start, self.year+1):
        if self.isLeapYear(i-1):
            curr_day += 2
        else:
            curr_day += 1
    return self.dayChecker(curr_day)
  `;

  const codeTwo: string = `
  def isLeapYear(self, year):
    if year % 4 == 0 and not year % 100 == 0:
        return True
    elif year % 4 == 0 and year % 100 == 0 and year % 400 == 0:
        return True
    elif year % 4 == 0 and year % 100 == 0:
        return False
    else:
        return False
  `;

  const codeThree: string = `
  def printCalenderMonth(self):
    i = 1
    step = 0
    while i <= self.returnMonthDay(self.month-1, self.year):
        # print(self.findStartDayOfMonth(self.month))
        if step > self.findStartDayOfMonth(self.month):
            if i < 10:
                print("   {}".format(i), end=" ")
            else:
                print("  {}".format(i), end=" ")
            if step % 7 == 0:
                print("\\n")
            i += 1
        else:
            print("    ", end=" ")
            if step % 7 == 0:
                print("\\n")
        step += 1
  `;

  return (
    <div>
      <div className="font-bold mb-5 text-xl text-slate-600">
      Calender – Python
      </div>      
      <div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Programming Language Used :</span> Python
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Software Used :</span> PyCharm
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Github Link : </span> 
          <a href="https://github.com/sidthree6/Python-Calender" className='text-blue-400'>https://github.com/sidthree6/Python-Calender</a>
        </div>
        <div className='m-2'>
          <span className='font-bold text-slate-500 italic'>Description : </span> 
          <div className='mb-5'>
          This is calender project I have made using python. It contains a calender class which has many property that returns value based on if year is lear year, what is the first day of the month, etc. When program is first launched it ask user about year and month of calender they want to display, after getting these input from user, they are presented with accurate calender.
          </div>          
          <div className='mb-5'>
          <ul className='list-disc ml-10'>
            <li>In order to make this software more expandable in future and easy to manage I have decided to create a class first called Calender in file called custom_calender.py</li>
            <li>Then in constructor I have created few variables such as list of month names, list of week names and also a list which shows how many days each month have (for simplicity I have used 28 for febuary but have created new function which return 29 if it detects a leap year).</li>
            <li>I made a function later which returns first day of the year when year is provided. It is common knowledge that if for example today is January 1st 2019 which is on Tuesday, then on same date next year January 1st 2020 it will be Wednesday. It means it jumps a day on same exact date in next year and jumps 2 day if there is a leap year.</li>
          </ul>
          </div>
        </div>
        <div className='m-5 bg-gray-800 text-white text-ellipsis overflow-auto '>
          <pre>
            <code>
            {codeOne}
            </code>
          </pre>
        </div>
        <div className='mb-5'>
        Made a function that checks if year is leap year or not
        </div>
        <div className='m-5 bg-gray-800 text-white text-ellipsis overflow-auto '>
          <pre>
            <code>
            {codeTwo}
            </code>
          </pre>
        </div>
        <div className='mb-5'>
        Made a function which prints a month based on user input after all calculations are done.
        </div>
        <div className='m-5 bg-gray-800 text-white text-ellipsis overflow-auto '>
          <pre>
            <code>
            {codeThree}
            </code>
          </pre>
        </div>

      </div>      
      <div  className='m-5'>
        <Image src={ImageOne}/>
      </div>
      <div className='mt-6 text-center'>
        <Link href={"../"}>
            <a className="font-bold underline hover:no-underline">
                Go Back
            </a>
        </Link>
      </div>
    </div>
  );
};

export default NeuralNetwork
