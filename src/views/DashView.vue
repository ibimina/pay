<template>
  <div class="lg:w-9/12 ml-auto bg-back-slime px-2 lg:px-12">
    <main class="relative">
      <header class="p-2 flex items-center justify-between lg:flex-row-reverse">
        <div class="lg:hidden flex items-center gap-2">
          <img src="/img/avatar.png" alt="avatar" />
          <p>Hello Wasiu</p>
        </div>
        <div class="hidden lg:flex items-center gap-8">
          <img src="/img/notificatin.png" alt="notification bell" />
          <div class="hidden lg:flex items-center gap-4 justify-between relative">
            <img src="/img/avatar.png" alt="avatar" />
            <div>
              <p>Kalu Abasiama</p>
              <p>Admin</p>
            </div>
            <img
              class="absolute bottom-0 right-0 rotar -rotate-90"
              src="/img/arrow.png"
              alt="arrow"
            />
          </div>
        </div>
        <img class="lg:hidden" src="/img/notificatin.png" alt="notification bell" />
      </header>
      <section>
        <div class="lg:flex lg:gap-6">
          <div class="lg:w-9/12">
            <div class="bg-dark-green px-3 py-6 mb-4 rounded-2xl text-white lg:col-span-3">
              <p>Wallet Balance</p>
              <div class="lg:flex lg:items-center lg:justify-between lg:">
                <div class="flex items-center justify-between mb-4 lg:gap-2">
                  <p class="flex items-center justify-between text-2xl font-bold">
                    <img src="/img/lightnaria.png" alt="arrow" /> 15,067,789.00
                  </p>
                  <img src="/img/preview.png" alt="preview" />
                </div>
                <button
                  class="px-1 py-2 block w-full lg:w-auto rounded-xl text-center bg-light-green text-dark-green"
                >
                  Fund Wallet
                </button>
              </div>
            </div>
            <div class="lg:hidden mb-4">
              <p class="my-3">QUICK STATS</p>
              <div class="grid grid-cols-2 gap-2">
                <div class="bg-gray-200 rounded-lg p-2">
                  <p>Total Payroll</p>
                  <p>2,067,789,345.05</p>
                </div>
                <div class="bg-gray-200 rounded-lg p-2">
                  <p>Total Payroll</p>
                  <p>2,067,789,345.05</p>
                </div>
              </div>
            </div>
            <div class="row-start-2 mb-8 lg:mb-0">
              <p class="lg:hidden mb-3">QUICK ACTIONS</p>
              <div
                class="grid grid-cols-3 lg:grid-cols-4 lg:gap-2 border rounded-lg p-4 lg:border-0"
              >
                <div
                  class="grid items-center justify-center mb-6 lg:py-3 lg:bg-white lg:shadow-icon-sh lg:rounded-xl"
                >
                  <img class="mx-auto mb-4" src="/img/salary.png" alt="naria note" />
                  <p>Pay Salaries</p>
                </div>
                <div
                  class="grid items-center justify-center mb-6 lg:py-3 lg:bg-white lg:shadow-icon-sh lg:rounded-xl"
                >
                  <img class="mx-auto mb-4" src="/img/red-user.png" alt="naria note" />
                  <p>Add Employee</p>
                </div>
                <div
                  class="grid items-center justify-center mb-6 lg:py-3 lg:bg-white lg:shadow-icon-sh lg:rounded-xl"
                >
                  <img class="mx-auto mb-4" src="/img/sendmoney.png" alt="send money" />
                  <p>Send Payslips</p>
                </div>
                <div
                  class="grid items-center justify-center mb-6 lg:py-3 lg:bg-white lg:shadow-icon-sh lg:rounded-xl"
                >
                  <img class="mx-auto mb-4" src="/img/edit.png" alt="naria note" />
                  <p>Edit Salaries</p>
                </div>
                <div class="grid items-center justify-center mb-6 lg:hidden">
                  <img class="mx-auto mb-4" src="/img/loan.png" alt="loan" />
                  <p>Get a Loan</p>
                </div>
                <div class="grid items-center justify-center mb-6 lg:hidden">
                  <img class="mx-auto mb-4" src="/img/transfer.png" alt="transfer" />
                  <p>Make a Transfer</p>
                </div>
                <div class="grid items-center justify-center mb-6 lg:hidden">
                  <img class="mx-auto mb-4" src="/img/airtime.png" alt="naria note" />
                  <p>Airtime</p>
                </div>
                <div class="grid items-center justify-center mb-6 lg:hidden">
                  <img class="mx-auto mb-4" src="/img/data.png" alt="naria note" />
                  <p>Data</p>
                </div>
                <div
                  class="grid items-center justify-center mb-6 lg:hidden lg:bg-white lg:py-4 px-2 lg:rounded-xl"
                >
                  <img class="mx-auto mb-4" src="/img/electric.png" alt="naria note" />
                  <p>Electricity</p>
                </div>
              </div>
            </div>
          </div>
          <img class="hidden h-60 lg:block" src="/img/payrollcal.png" alt="calendar" />
        </div>
        <img class="hidden lg:block" src="/img/graphone.png" alt="graph" />
        <section class="mb-24 lg:mb-0">
          <h3 class="mb-3">Recent Activities</h3>
          <div class="mb-4 flex">
            <input class="w-11/12 gap-2" type="text" name="" id="" />
            <input type="submit" value="filter" />
          </div>
          <div>
            <h4 class="mb-6">Wednesday, November 09, 2022</h4>
            <div class="flex justify-between bg-white p-4 rounded-lg">
              <div>
                <p class="mb-3">PAYROLL</p>
                <div class="flex items-center gap-2">
                  <span class="p-4 rounded-full text-center bg-green-600 text-white">BM</span>
                  <p>Badmus Kemis</p>
                </div>
              </div>

              <div>
                <p>ACTIVITY</p>
                <p>Paid November</p>
              </div>
              <div>
                <p>EMPLOYEE</p>
                <p>52</p>
              </div>
              <div>
                <p>TIME</p>
                <p>16:15</p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <ul
        class="px-2 py-6 bg-white fixed right-0 bottom-0 w-full flex items-center justify-between lg:hidden"
      >
        <li>
          <img class="mx-auto" src="/img/home.png" alt="home" />
          <p>Home</p>
        </li>
        <li>
          <img class="mx-auto" src="/img/user-plus.png" alt="home" />
          <p>Employee</p>
        </li>
        <li>
          <img class="mx-auto" src="/img/payroll.png" alt="home" />
          <p>Payroll</p>
        </li>
        <li>
          <img class="mx-auto" src="/img/loangrey.png" alt="home" />
          <p>Loan</p>
        </li>
        <li>
          <img src="/img/more.png" alt="home" />
          <p>More</p>
        </li>
      </ul>
    </main>
    <aside class="hidden lg:block lg:fixed top-0 left-0 bottom-0 w-3/12 bg-white overflow-y-scroll">
      <div class="">
        <div class="flex items-center justify-center bg-logo-pattern bg-cover bg-no-repeat h-48">
          <img class="mb-6" src="/img/logo-light.png" alt="logo" />
        </div>
      </div>

      <ul class="mt-6">
        <li class="mb-6 border-b py-5 px-6"><p>Dashboard</p></li>
        <li class="mb-6 border-b py-5 px-6"><p>Wallet</p></li>
        <li class="mb-6 border-b py-5 px-6"><p>Employee Management</p></li>
        <li class="mb-6 border-b py-5 px-6"><p>Payroll</p></li>
        <li class="mb-6 border-b py-5 px-6"><p>Compliance</p></li>
        <li class="mb-6 border-b py-5 px-6"><p>Quick Loan</p></li>
        <li class="mb-6 border-b py-5 px-6"><p>Book Keeping</p></li>
        <li class="mb-6 border-b py-5 px-6"><p>Support</p></li>
        <li class="mb-6 border-b py-5 px-6"><p>Settings</p></li>
      </ul>
    </aside>
  </div>
</template>
