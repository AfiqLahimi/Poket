/* ================= Icons ================= */
const IP={
  plus:'<path d="M12 5v14M5 12h14"/>',
  home:'<path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z"/>',
  list:'<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4.5 6h.01M4.5 12h.01M4.5 18h.01" stroke-width="2.6"/>',
  pie:'<path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5H12z"/><path d="M15 3.8A8.5 8.5 0 0 1 20.2 9H15z"/>',
  cal:'<rect x="4" y="5" width="16" height="15" rx="2.5"/><path d="M4 10h16M9 3v4M15 3v4"/>',
  gear:'<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
  left:'<path d="M15 18l-6-6 6-6"/>',right:'<path d="M9 18l6-6-6-6"/>',
  search:'<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4-4"/>',
  bank:'<path d="M3 9.5 12 5l9 4.5"/><path d="M5 10v7M9.5 10v7M14.5 10v7M19 10v7M3.5 20h17"/>',
  phone:'<rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M11 17.5h2"/>',
  cash:'<rect x="3" y="6.5" width="18" height="11" rx="2"/><circle cx="12" cy="12" r="2.3"/>',
  card:'<rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M3 10h18M7 15h3"/>',
  trend:'<path d="M4 17l5.5-5.5 4 4L20 9"/><path d="M15 9h5v5"/>',
  house:'<path d="M4 11 12 4.5 20 11"/><path d="M6 9.5V20h12V9.5"/><path d="M10 20v-5h4v5"/>',
  car:'<path d="M4 16v-3.5L6 8h12l2 4.5V16z"/><path d="M6.5 16v2.5M17.5 16v2.5"/><path d="M7.5 12.5h.01M16.5 12.5h.01" stroke-width="2.6"/>',
  box:'<path d="M4 8l8-4 8 4v8l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v8"/>',
  doc:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  swap:'<path d="M5 8h13l-3.5-3.5M19 16H6l3.5 3.5"/>',
  scale:'<path d="M12 4v16M7 20h10M5 8h14"/><path d="M5 8l-2.5 6a2.5 2.5 0 0 0 5 0zM19 8l-2.5 6a2.5 2.5 0 0 0 5 0z"/>',
  minus:'<path d="M5 12h14"/>',
  in:'<path d="M12 4v12M7 11l5 5 5-5"/><path d="M5 20h14"/>',
  up:'<path d="M12 20V8M7 13l5-5 5 5"/><path d="M5 4h14"/>',
  target:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><path d="M12 12h.01" stroke-width="2.6"/>',
  repeat:'<path d="M17 3l3 3-3 3"/><path d="M4 12V10a4 4 0 0 1 4-4h12"/><path d="M7 21l-3-3 3-3"/><path d="M20 12v2a4 4 0 0 1-4 4H4"/>',
  user:'<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/>',
  globe:'<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.6 2.6 14.4 0 17M12 3.5c-2.6 2.6-2.6 14.4 0 17"/>',
  moon:'<path d="M19.5 14.5A7.5 7.5 0 0 1 9.5 4.5a7.5 7.5 0 1 0 10 10z"/>',
  tag:'<path d="M3.5 12.5v-8a1 1 0 0 1 1-1h8l8 8-9 9z"/><path d="M8 8h.01" stroke-width="2.6"/>',
  zap:'<path d="M13 3 5 14h6l-1 7 8-11h-6z"/>',
  help:'<circle cx="12" cy="12" r="8.5"/><path d="M9.8 9.6a2.3 2.3 0 1 1 3 2.2c-.6.3-1 .7-1 1.3v.4"/><path d="M12 16.5h.01" stroke-width="2.6"/>',
  shield:'<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
  save:'<path d="M12 4v11M7.5 10.5 12 15l4.5-4.5"/><path d="M5 19h14"/>',
  bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
};
const ic=(n,cls)=>`<svg class="i ${cls||''}" viewBox="0 0 24 24">${IP[n]||''}</svg>`;

/* ================= i18n ================= */
const L={
en:{
  mon:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  monF:['January','February','March','April','May','June','July','August','September','October','November','December'],
  today:'Today',yesterday:'Yesterday',
  tabs:{home:'Home',activity:'Activity',portfolio:'Portfolio',debts:'Debts',goals:'Goals',settings:'Settings'},
  acct:{bank:'Bank account',ewallet:'E-wallet',cash:'Cash',invest:'Investment',property:'Property',vehicle:'Vehicle',asset:'Other asset',cc:'Credit card',loan:'Loan',bnpl:'BNPL / PayLater'},
  grpAssets:'Assets',grpLiab:'Liabilities',
  grp:{liquid:'Cash & bank',invest:'Investments',physical:'Property & other assets',cc:'Credit cards',bnpl:'BNPL / PayLater',loans:'Loans'},
  kinds:{asb:'ASB / ASNB',stocks:'Stocks',ut:'Unit trust',gold:'Gold',crypto:'Crypto',th:'Tabung Haji',epf:'EPF',fd:'Fixed deposit',other:'Other'},
  cats:{food:'Food & drinks',groceries:'Groceries',fuel:'Fuel & tolls',transport:'Transport',bills:'Bills & utilities',housing:'Home & rent',shopping:'Shopping',health:'Health',fun:'Entertainment',subs:'Subscriptions',family:'Family',charity:'Charity & zakat',edu:'Education',other:'Other',salary:'Salary',side:'Side income',dividend:'Dividends',cashback:'Cashback & rebates',gift:'Gifts',otherIn:'Other'},
  loading:'Loading your data…',showAll:'Show all',showLess:'Show less',seeAll:'See all',
  bPreview:'Preview mode — nothing is saved here. Open Poket from your claude.ai link while signed in to save data.',
  bOffline:"Can't reach storage yet. Numbers may be out of date.",bErr:c=>`Storage unavailable (${c}). Try reloading later.`,
  hi:n=>n?`Hi, <b>${n}</b>`:'Hi there',
  welcomeT:'Welcome to Poket',welcomeB:'Add your accounts with today\'s balances — banks, e-wallets, cards, loans and investments. Poket tracks everything from there.',guide:'Getting started guide',
  unassigned:n=>n>1?`${n} transactions need an account and aren't counted yet.`:`1 transaction needs an account and isn't counted yet.`,
  fromShortcut:n=>`${n} new from Shortcut. Check categories when you can.`,
  stale:names=>`Haven't checked ${names} in a while.`,
  dueSoon:(n,d)=>`${n} due ${d}`,overBudget:c=>`Over budget on ${c}`,nearBudget:c=>`Almost at budget for ${c}`,
  review:'Review',view:'View',check:'Check',pay:'Pay',
  netWorth:'Net worth',assets:'Assets',liabilities:'Liabilities',cardDebt:'Card debt',debtRatio:'Debt ratio',
  ofLimit:p=>`${p} of limit`,
  spent:'Spent',income:'Income',left:'Left',invested:'Invested',savingsRate:p=>`Savings rate ${p}`,
  ccPaidNote:a=>`Debt payments of ${a} this month aren't counted as spending.`,
  qSpend:'Spend',qIncome:'Income',qTransfer:'Transfer',qImport:'Import',
  byCategory:'Spending by category',byAccount:'Spending by account',noSpend:'No spending yet this month.',recent:'Recent activity',
  budgets:'Budgets',upcoming:'Upcoming bills',
  limit:'Limit',used:'used',noLimit:'No limit set',payBy:d=>`due ${ordinal(d)}`,deletedAcc:'(deleted account)',
  searchPh:'Search merchant, category, account',
  fAll:'All',fExp:'Spending',fInc:'Income',fTrf:'Transfers',fAdj:'Adjustments',fRev:'To review',
  noTx:m=>`No activity in ${m}.`,noReview:'Nothing to review.',
  notSpend:'not spending',pickAcc:'Pick account',
  tSpend:'Spending',tIncome:'Income',tTransfer:'Transfer',tPayCard:n=>`Paid ${n}`,tInvestTo:n=>`Invested in ${n}`,tAdj:'Balance adjustment',notCounted:'not counted as spending',
  checked:w=>`Checked ${w}`,neverChecked:'Never checked',updated:w=>`Updated ${w}`,
  update:'Update',addAccount:'Add account',archived:'Archived',
  capital:'Capital',allocation:'Allocation',invest:'Invest',withdraw:'Withdraw',
  monthly:'Monthly',paidOff:p=>`${p} paid off`,perMonth:a=>`${a}/mo`,
  health:'Financial health',hEmerg:'Emergency fund',hEmergV:m=>`${m} months`,hEmergTip:'Aim for 3–6 months of spending in cash.',
  hDebt:'Debt to assets',hDebtTip:'Below 30% is healthy.',hUtil:'Card utilisation',hUtilTip:'Keep under 30% and pay in full each month.',
  hSave:'Savings rate',hSaveTip:'20% or more of income is a good target.',hCommit:'Monthly commitments',hCommitTip:'Loans + BNPL + bills. Keep under 40% of income.',
  good:'Good',ok:'Fair',bad:'Watch',na:'—',
  manageT:'How to manage your assets',manageNote:'General guidance, not financial advice.',
  tips:[['Build a buffer first','Keep 3–6 months of spending in a savings account or e-wallet before investing more.'],['Clear expensive debt','Pay credit cards in full. Card interest is far higher than most investment returns.'],['Watch BNPL','PayLater makes many small debts. Track them here so they don\'t pile up.'],['Pay yourself first','On payday, transfer savings and investments before spending.'],['Spread your money','Don\'t keep everything in one place — mix cash, ASB/FD, EPF and other investments.'],['Update values monthly','Use Update on investments and assets once a month so your net worth stays real.'],['Check balances weekly','A quick Check keeps Poket matched to your bank and catches missed spending.']],
  planBudgets:'Monthly budgets',setBudget:'Set budget',noBudgets:'No budgets yet. Set a limit for categories you want to control.',
  budgetLeft:a=>`${a} left`,budgetOver:a=>`${a} over`,
  bills:'Bills & subscriptions',addBill:'Add bill',noBills:'Track rent, phone, Netflix and other recurring payments.',billsTotal:a=>`${a} per month`,
  paid:'Paid',dueOn:d=>`Due ${ordinal(d)}`,yearly:'Yearly',everyMonth:'Monthly',markPaid:'Mark paid',
  goals:'Savings goals',addGoal:'Add goal',noGoals:'Set a goal — emergency fund, holiday, wedding, car.',goalNeed:a=>`${a}/mo to reach on time`,goalDone:'Goal reached',addMoney:'Add money',
  debtTotal:'Total debt',debtMonthly:'Monthly payments',debtFreeBy:'Debt-free by',dueThisMonth:'Due this month',paidMonth:'Paid',nLeft:n=>`${n} payment${n===1?'':'s'} left`,freeOn:m=>`done ${m}`,addDebt:'Add debt',viewDebts:'View debts',editLbl:'Edit',actTx:'Transactions',actBills:'Bills & subscriptions',noDebtsYet:'No debts tracked. Add your credit cards, BNPL and loans to see the full picture.',bnplHint:'Each PayLater provider (Atome, SPayLater, Grab PayLater) as one account. Spend with it like a card; Pay reduces what you owe.',
  debtTips:[['Pay cards in full','Card interest (up to ~18% a year) costs more than most other debt.'],['Limit BNPL','Keep to one or two PayLater plans at a time. Late fees add up fast.'],['Smallest or costliest first','Clear the smallest balance for momentum, or the highest interest to save the most.']],
  debts:'Loans & BNPL',noDebts:'Add car loans, PTPTN, housing loans and PayLater plans in Portfolio.',
  setProfile:'Profile',accountsN:n=>`${n} account${n===1?'':'s'}`,nameLbl:'Your name',namePh:'e.g. Afiq',
  sLang:'Language',sTheme:'Appearance',thAuto:'Auto',thLight:'Light',thDark:'Dark',
  sCats:'Categories',sShortcut:'iPhone Shortcut setup',sImport:'Import from Shortcut',sBackup:'Backup',sRestore:'Restore backup',sHelp:'Getting started',sAbout:'About Poket',
  sGeneral:'General',sData:'Data',sHelpGrp:'Help',
  aboutB:'Poket isn\'t connected to any bank and has no server. Your data is stored only on this phone. Make a backup now and then — if you delete the app or clear Safari data, it\'s gone. No ads.',rsPick:'Choose backup file',rsLoaded:'Backup loaded — tap Restore',backupAgo:d=>`Last backup ${d}`,backupNever:'No backup yet',backupFirst:'No backup yet. Your data lives only on this phone.',backupNudge:'No backup in over 2 weeks. Your data lives only on this phone.',
  helpSteps:[['Add your accounts','Portfolio → Add account. Enter today\'s balance for banks and e-wallets, outstanding for cards and loans, and current value for investments and property.'],['Record money moving','<b>Spend</b> for purchases, <b>Income</b> for money in, and <b>Transfer</b> for moving money between your own accounts — including paying a credit card or loan, so it\'s never counted twice.'],['Check balances weekly','Tap Check on an account and type the real balance from your bank app. Poket shows the difference and helps you fix it.'],['Plan ahead','Set budgets, bills and goals in the Plan tab.'],['Automate with Shortcut','Settings → iPhone Shortcut setup records Apple Pay taps for you.']],
  scIntro:'Every Apple Pay tap is saved quietly to a file on your iCloud Drive. Import it whenever you like — nothing goes through your bank or any other server.',
  sc:['Open <b>Shortcuts</b> → <b>Automation</b> → <b>+</b> → <b>Transaction</b> (Wallet).','Select all cards and all categories, set <b>Run Immediately</b>, then Next.','Add a <b>Text</b> action with this format (tap each [ ] and pick the variable from <i>Shortcut Input</i>):','Add <b>Append to Text File</b>. File: <code>Poket/inbox.txt</code> (Shortcuts folder in iCloud Drive). Turn on <b>Make New Line</b>.','In Portfolio → tap a card → fill in <b>Name in Apple Wallet</b> so Poket recognises it.'],
  sc3b:'For <b>Current Date</b>, set Date Format to <b>ISO 8601</b>.',copyFormat:'Copy format',
  scWarn:'Wallet automations only fire for <b>Apple Pay</b>. For DuitNow QR, FPX or physical cards, make a second shortcut: <i>Ask for Input</i> (Number) → <i>Ask for Input</i> (Text) → <i>Choose from List</i> (accounts) → <i>Text</i> <code>Poket|[Current Date]|[Number]|[Merchant]|[Account]</code> → <i>Append to Text File</i>. Add <code>|in</code> at the end for money in.',
  impBody:'Pick <code>inbox.txt</code> from Files → iCloud Drive → Shortcuts → Poket. Lines already imported are skipped.',pickFile:'Choose inbox.txt',paste:'Paste text',
  catsExp:'Spending',catsInc:'Income',addCat:'Add',
  newTx:'New transaction',editTx:'Edit transaction',segExp:'Spend',segInc:'Income',segTrf:'Transfer',
  unknownCard:c=>`From Shortcut, but card “${c}” wasn't recognised. Pick the account — Poket will remember it.`,
  payWith:'Paid with',depositTo:'Received in',from:'From',toLbl:'To — pick a card or loan to pay it off',
  nCC:n=>`Debt payment: ${n} goes down and it's <b>not counted as spending</b>.`,
  nInv:'Goes into your investment as capital, not spending.',nOut:'Withdrawal from investment. Not counted as income.',nOwn:'Moving money between your own accounts. Not counted as spending.',
  ccWarn:'Looks like a card payment? Use <b>Transfer</b> so it isn\'t counted twice.',switchCard:'Switch to card payment',
  merchant:'Merchant or note',noteOpt:'Note (optional)',phExp:'e.g. Mydin, Grab, Shopee',phInc:'e.g. November salary',
  category:'Category',date:'Date',save:'Save',delete:'Delete',tapAgain:'Tap again to delete',close:'Close',done:'Done',
  adjTitle:'Balance adjustment',adjBody:'Created when you checked a balance. It corrects the account but isn\'t counted as spending or income.',
  tEnterAmt:'Enter an amount',tPickAcc:'Pick an account',tPickBoth:'Pick both accounts',tSame:'From and to are the same',tUpdated:'Updated',tSaved:'Saved',tDeleted:'Deleted',tAddAccFirst:'Add an account first',tAccSaved:'Account saved',tEnterName:'Enter a name',tAccDeleted:'Account deleted',tSure:'Sure? Tap again',
  tMatched:n=>`${n} now matches your bank`,tValUpd:'Value updated',tEnterVal:'Enter a value',tCopied:'Copied',tBackup:'Backup copied — paste it into Notes',tBadBackup:'That backup text isn\'t valid',tNotBackup:'That isn\'t a Poket backup',tRestored:'Restored',
  tSaveFail:c=>`Couldn't save (${c}). Try again.`,tFull:'Storage full — delete old data or make a backup.',
  newAcc:'Add account',editAcc:'Edit account',type:'Type',name:'Name',
  phName:{bank:'e.g. Maybank Savings',ewallet:"e.g. Touch 'n Go",cash:'e.g. Wallet',invest:'e.g. ASB',property:'e.g. Home in Shah Alam',vehicle:'e.g. Myvi 2022',asset:'e.g. Gold jewellery',cc:'e.g. Maybank Visa',loan:'e.g. Car loan',bnpl:'e.g. Atome'},
  invKind:'Investment type',
  open:{bank:'Current balance',ewallet:'Current balance',cash:'Current amount',invest:'Capital so far',property:'Current value',vehicle:'Current value',asset:'Current value',cc:'Current outstanding',loan:'Outstanding balance',bnpl:'Outstanding balance'},
  openHintNew:'Today\'s number. Poket counts from here.',openHintEdit:'Starting number. If it drifts from your bank, use Check instead.',
  limitLbl:'Credit limit',dueLbl:'Due day',duePh:'e.g. 15',monthlyLbl:'Monthly payment',origLbl:'Original amount',origHint:'Used to show how much you\'ve paid off.',
  walletLbl:'Name in Apple Wallet',walletPh:'e.g. Maybank Visa, 1234',walletHint:'For Shortcut. Separate with commas; last 4 digits work too.',
  archive:'Archive',unarchive:'Unarchive',
  checkT:n=>`Check balance · ${n}`,checkB:l=>l?'Open your bank app and type the <b>actual outstanding</b>.':'Open your bank app and type the <b>actual balance</b>.',
  inPoket:'In Poket',actualDebt:'Actual outstanding',actualBal:'Actual balance',matched:'Perfect — matches your bank',markChecked:'Mark as checked',
  missingSpend:'Some spending wasn\'t recorded.',missingInc:'Some money in wasn\'t recorded.',tryRecall:'Look through Activity first.',
  recExp:'Record as missed spending',recInc:'Record as missed income',adjOnly:'Just adjust (not spending)',adjHint:'Use adjust for interest, fees or a wrong starting balance.',
  noteMissExp:'Unrecorded spending',noteMissInc:'Unrecorded income',noteAdj:'Balance adjustment',
  valT:n=>`Current value · ${n}`,valB:c=>`Type the latest value (e.g. from myASNB, Bursa, or a valuation). Cost so far: ${c}.`,saveVal:'Save value',
  impDone:'Import complete',impNew:'New',impDup:'Already imported',impUnk:n=>`${n} had an unrecognised card. Tap each to pick an account.`,impBad:n=>`${n} line(s) didn't match the format and were skipped.`,ok:'OK',
  pasteT:'Paste from Shortcut',import:'Import',
  newCatT:k=>k==='exp'?'New spending category':'New income category',newCatPh:'e.g. Pets',remove:'Remove',
  restoreB:'This replaces all current data with the backup.',restoreSure:'Replace everything? Tap again',manualCopy:'Copy this text',
  budgetT:'Set budget',budgetAmt:'Monthly limit',budgetHint:'Set 0 to remove.',
  billT:'Bill or subscription',billName:'Name',billNamePh:'e.g. Netflix, Unifi, rent',billAmt:'Amount',billDay:'Day of month',billFreq:'Repeats',billAcc:'Paid from',
  goalT:'Savings goal',goalName:'Goal',goalNamePh:'e.g. Emergency fund',goalTarget:'Target amount',goalBy:'Target date (optional)',goalLink:'Track using account (optional)',goalLinkHint:'Pick a savings account and Poket uses its balance. Leave empty to add money manually.',goalSaved:'Saved so far',noLink:'None — add manually',
  addMoneyT:n=>`Add to ${n}`,
},
ms:{
  mon:['Jan','Feb','Mac','Apr','Mei','Jun','Jul','Ogo','Sep','Okt','Nov','Dis'],
  monF:['Januari','Februari','Mac','April','Mei','Jun','Julai','Ogos','September','Oktober','November','Disember'],
  today:'Hari ni',yesterday:'Semalam',
  tabs:{home:'Utama',activity:'Aktiviti',portfolio:'Portfolio',debts:'Hutang',goals:'Matlamat',settings:'Tetapan'},
  acct:{bank:'Akaun bank',ewallet:'E-wallet',cash:'Tunai',invest:'Pelaburan',property:'Hartanah',vehicle:'Kenderaan',asset:'Aset lain',cc:'Kad kredit',loan:'Pinjaman',bnpl:'BNPL / PayLater'},
  grpAssets:'Aset',grpLiab:'Liabiliti',
  grp:{liquid:'Tunai & bank',invest:'Pelaburan',physical:'Hartanah & aset lain',cc:'Kad kredit',bnpl:'BNPL / PayLater',loans:'Pinjaman'},
  kinds:{asb:'ASB / ASNB',stocks:'Saham',ut:'Unit amanah',gold:'Emas',crypto:'Crypto',th:'Tabung Haji',epf:'KWSP',fd:'Simpanan tetap',other:'Lain-lain'},
  cats:{food:'Makan & minum',groceries:'Groceri',fuel:'Minyak & tol',transport:'Pengangkutan',bills:'Bil & utiliti',housing:'Rumah & sewa',shopping:'Shopping',health:'Kesihatan',fun:'Hiburan',subs:'Langganan',family:'Keluarga',charity:'Sedekah & zakat',edu:'Pendidikan',other:'Lain-lain',salary:'Gaji',side:'Sampingan',dividend:'Dividen',cashback:'Cashback & rebat',gift:'Hadiah',otherIn:'Lain-lain'},
  loading:'Memuatkan data…',showAll:'Lihat semua',showLess:'Tutup',seeAll:'Semua',
  bPreview:'Mod pratonton — data tak disimpan. Buka Poket dari pautan claude.ai (log masuk) untuk simpan data.',
  bOffline:'Belum dapat sambung ke storan.',bErr:c=>`Storan tak boleh dicapai (${c}).`,
  hi:n=>n?`Hai, <b>${n}</b>`:'Hai',
  welcomeT:'Selamat datang ke Poket',welcomeB:'Tambah akaun dengan baki hari ni — bank, e-wallet, kad, pinjaman dan pelaburan. Poket kira dari situ.',guide:'Panduan bermula',
  unassigned:n=>`${n} transaksi belum ada akaun dan belum dikira.`,
  fromShortcut:n=>`${n} transaksi baru dari Shortcut.`,
  stale:names=>`Dah lama tak semak ${names}.`,
  dueSoon:(n,d)=>`${n} perlu dibayar ${d}`,overBudget:c=>`Lebih bajet: ${c}`,nearBudget:c=>`Hampir capai bajet: ${c}`,
  review:'Semak',view:'Lihat',check:'Semak',pay:'Bayar',
  netWorth:'Nilai bersih',assets:'Aset',liabilities:'Liabiliti',cardDebt:'Hutang kad',debtRatio:'Nisbah hutang',
  ofLimit:p=>`${p} daripada had`,
  spent:'Belanja',income:'Masuk',left:'Baki',invested:'Dilabur',savingsRate:p=>`Kadar simpanan ${p}`,
  ccPaidNote:a=>`Bayaran hutang ${a} bulan ni tak dikira sebagai belanja.`,
  qSpend:'Belanja',qIncome:'Masuk',qTransfer:'Pindah',qImport:'Import',
  byCategory:'Belanja ikut kategori',byAccount:'Belanja ikut akaun',noSpend:'Belum ada belanja bulan ni.',recent:'Aktiviti terkini',
  budgets:'Bajet',upcoming:'Bil akan datang',
  limit:'Had',used:'guna',noLimit:'Had belum ditetapkan',payBy:d=>`bayar ${d}hb`,deletedAcc:'(akaun dipadam)',
  searchPh:'Cari kedai, kategori, akaun',
  fAll:'Semua',fExp:'Belanja',fInc:'Masuk',fTrf:'Pindahan',fAdj:'Pelarasan',fRev:'Perlu semak',
  noTx:m=>`Tiada aktiviti dalam ${m}.`,noReview:'Tiada yang perlu disemak.',
  notSpend:'bukan belanja',pickAcc:'Pilih akaun',
  tSpend:'Belanja',tIncome:'Masuk',tTransfer:'Pindah',tPayCard:n=>`Bayar ${n}`,tInvestTo:n=>`Labur ke ${n}`,tAdj:'Pelarasan baki',notCounted:'tak dikira belanja',
  checked:w=>`Disemak ${w}`,neverChecked:'Belum pernah semak',updated:w=>`Dikemas kini ${w}`,
  update:'Kemas kini',addAccount:'Tambah akaun',archived:'Diarkibkan',
  capital:'Modal',allocation:'Agihan',invest:'Labur',withdraw:'Keluarkan',
  monthly:'Bulanan',paidOff:p=>`${p} dah dibayar`,perMonth:a=>`${a}/bln`,
  health:'Kesihatan kewangan',hEmerg:'Dana kecemasan',hEmergV:m=>`${m} bulan`,hEmergTip:'Sasarkan 3–6 bulan belanja dalam bentuk tunai.',
  hDebt:'Hutang berbanding aset',hDebtTip:'Bawah 30% dikira sihat.',hUtil:'Penggunaan kad',hUtilTip:'Kekal bawah 30% dan bayar penuh setiap bulan.',
  hSave:'Kadar simpanan',hSaveTip:'Sasarkan 20% atau lebih daripada pendapatan.',hCommit:'Komitmen bulanan',hCommitTip:'Pinjaman + BNPL + bil. Kekal bawah 40% pendapatan.',
  good:'Baik',ok:'Sederhana',bad:'Awas',na:'—',
  manageT:'Cara urus aset kau',manageNote:'Panduan umum, bukan nasihat kewangan.',
  tips:[['Bina dana kecemasan dulu','Simpan 3–6 bulan belanja dalam akaun simpanan atau e-wallet sebelum labur lebih.'],['Langsaikan hutang mahal','Bayar kad kredit penuh. Faedah kad jauh lebih tinggi daripada pulangan kebanyakan pelaburan.'],['Hati-hati dengan BNPL','PayLater buat banyak hutang kecil. Rekod di sini supaya tak bertimbun.'],['Bayar diri sendiri dulu','Hari gaji, pindah simpanan dan pelaburan dulu sebelum berbelanja.'],['Pelbagaikan','Jangan simpan semua di satu tempat — campur tunai, ASB/FD, KWSP dan pelaburan lain.'],['Kemas kini nilai setiap bulan','Guna Kemas kini pada pelaburan dan aset sebulan sekali supaya nilai bersih tepat.'],['Semak baki setiap minggu','Semak sekejap supaya Poket sama dengan bank dan tangkap belanja tertinggal.']],
  planBudgets:'Bajet bulanan',setBudget:'Tetapkan bajet',noBudgets:'Belum ada bajet. Tetapkan had untuk kategori yang kau nak kawal.',
  budgetLeft:a=>`${a} lagi`,budgetOver:a=>`lebih ${a}`,
  bills:'Bil & langganan',addBill:'Tambah bil',noBills:'Rekod sewa, telefon, Netflix dan bayaran berulang lain.',billsTotal:a=>`${a} sebulan`,
  paid:'Dah bayar',dueOn:d=>`Bayar ${d}hb`,yearly:'Tahunan',everyMonth:'Bulanan',markPaid:'Tanda dah bayar',
  goals:'Matlamat simpanan',addGoal:'Tambah matlamat',noGoals:'Tetapkan matlamat — dana kecemasan, cuti, kahwin, kereta.',goalNeed:a=>`${a}/bln untuk capai tepat masa`,goalDone:'Matlamat tercapai',addMoney:'Tambah duit',
  debtTotal:'Jumlah hutang',debtMonthly:'Bayaran bulanan',debtFreeBy:'Bebas hutang',dueThisMonth:'Perlu bayar bulan ni',paidMonth:'Dah bayar',nLeft:n=>`${n} bayaran lagi`,freeOn:m=>`habis ${m}`,addDebt:'Tambah hutang',viewDebts:'Lihat hutang',editLbl:'Edit',actTx:'Transaksi',actBills:'Bil & langganan',noDebtsYet:'Belum ada hutang direkod. Tambah kad kredit, BNPL dan pinjaman untuk gambaran penuh.',bnplHint:'Setiap penyedia PayLater (Atome, SPayLater, Grab PayLater) sebagai satu akaun. Belanja guna dia macam kad; Bayar kurangkan hutang.',
  debtTips:[['Bayar kad penuh','Faedah kad (sehingga ~18% setahun) lebih mahal daripada kebanyakan hutang lain.'],['Hadkan BNPL','Simpan satu dua pelan PayLater je pada satu masa. Caj lewat cepat bertambah.'],['Kecil atau termahal dulu','Langsaikan baki paling kecil untuk semangat, atau faedah paling tinggi untuk jimat paling banyak.']],
  debts:'Pinjaman & BNPL',noDebts:'Tambah pinjaman kereta, PTPTN, rumah dan PayLater dalam Portfolio.',
  setProfile:'Profil',accountsN:n=>`${n} akaun`,nameLbl:'Nama kau',namePh:'cth: Afiq',
  sLang:'Bahasa',sTheme:'Paparan',thAuto:'Auto',thLight:'Cerah',thDark:'Gelap',
  sCats:'Kategori',sShortcut:'Setup Shortcut iPhone',sImport:'Import dari Shortcut',sBackup:'Sandaran',sRestore:'Pulihkan sandaran',sHelp:'Panduan bermula',sAbout:'Tentang Poket',
  sGeneral:'Umum',sData:'Data',sHelpGrp:'Bantuan',
  aboutB:'Poket tak disambung ke mana-mana bank dan tiada server. Data kau disimpan dalam phone ni je. Buat sandaran sekali-sekala — kalau padam app atau clear data Safari, data hilang. Tiada iklan.',rsPick:'Pilih fail sandaran',rsLoaded:'Sandaran dimuat — tekan Pulihkan',backupAgo:d=>`Sandaran terakhir ${d}`,backupNever:'Belum ada sandaran',backupFirst:'Belum ada sandaran. Data kau duduk dalam phone ni je.',backupNudge:'Dah lebih 2 minggu tak buat sandaran. Data kau duduk dalam phone ni je.',
  helpSteps:[['Tambah akaun','Portfolio → Tambah akaun. Masukkan baki hari ni untuk bank, hutang semasa untuk kad dan pinjaman, dan nilai semasa untuk pelaburan dan hartanah.'],['Rekod pergerakan duit','<b>Belanja</b> untuk pembelian, <b>Masuk</b> untuk duit masuk, dan <b>Pindah</b> untuk pindah antara akaun sendiri — termasuk bayar kad atau pinjaman, supaya tak dikira dua kali.'],['Semak baki setiap minggu','Tekan Semak pada akaun dan taip baki sebenar dari app bank. Poket tunjuk beza dan tolong betulkan.'],['Rancang','Tetapkan bajet, bil dan matlamat dalam tab Rancang.'],['Automasi dengan Shortcut','Tetapan → Setup Shortcut iPhone untuk rekod tap Apple Pay secara automatik.']],
  scIntro:'Setiap tap Apple Pay disimpan senyap ke satu fail dalam iCloud Drive. Import bila-bila masa — data tak melalui bank atau server lain.',
  sc:['Buka <b>Shortcuts</b> → <b>Automation</b> → <b>+</b> → <b>Transaction</b> (Wallet).','Pilih semua kad dan kategori, set <b>Run Immediately</b>, kemudian Next.','Tambah action <b>Text</b> dengan format ni (ketik setiap [ ] dan pilih variable dari <i>Shortcut Input</i>):','Tambah <b>Append to Text File</b>. Fail: <code>Poket/inbox.txt</code> (folder Shortcuts dalam iCloud Drive). Hidupkan <b>Make New Line</b>.','Dalam Portfolio → tekan kad → isi <b>Nama dalam Apple Wallet</b> supaya Poket kenal.'],
  sc3b:'Untuk <b>Current Date</b>, set Date Format ke <b>ISO 8601</b>.',copyFormat:'Salin format',
  scWarn:'Automation Wallet hanya jalan untuk <b>Apple Pay</b>. Untuk DuitNow QR, FPX atau kad fizikal, buat Shortcut kedua: <i>Ask for Input</i> (Number) → <i>Ask for Input</i> (Text) → <i>Choose from List</i> (akaun) → <i>Text</i> <code>Poket|[Current Date]|[Nombor]|[Kedai]|[Akaun]</code> → <i>Append to Text File</i>. Tambah <code>|in</code> di hujung untuk duit masuk.',
  impBody:'Pilih <code>inbox.txt</code> dari Files → iCloud Drive → Shortcuts → Poket. Baris yang dah diimport akan dilangkau.',pickFile:'Pilih inbox.txt',paste:'Tampal teks',
  catsExp:'Belanja',catsInc:'Masuk',addCat:'Tambah',
  newTx:'Transaksi baru',editTx:'Edit transaksi',segExp:'Belanja',segInc:'Masuk',segTrf:'Pindah',
  unknownCard:c=>`Dari Shortcut, tapi kad “${c}” tak dikenali. Pilih akaun — Poket akan ingat.`,
  payWith:'Bayar guna',depositTo:'Masuk ke',from:'Dari',toLbl:'Ke — pilih kad atau pinjaman untuk bayar',
  nCC:n=>`Bayaran hutang: ${n} turun dan <b>tak dikira sebagai belanja</b>.`,
  nInv:'Masuk ke pelaburan sebagai modal, bukan belanja.',nOut:'Keluarkan dari pelaburan. Tak dikira sebagai pendapatan.',nOwn:'Pindah antara akaun sendiri. Tak dikira sebagai belanja.',
  ccWarn:'Nampak macam bayaran kad? Guna <b>Pindah</b> supaya tak dikira dua kali.',switchCard:'Tukar ke bayaran kad',
  merchant:'Kedai atau nota',noteOpt:'Nota (pilihan)',phExp:'cth: Mydin, Grab, Shopee',phInc:'cth: Gaji November',
  category:'Kategori',date:'Tarikh',save:'Simpan',delete:'Padam',tapAgain:'Tekan lagi untuk padam',close:'Tutup',done:'Siap',
  adjTitle:'Pelarasan baki',adjBody:'Dibuat masa semak baki. Ia betulkan baki tapi tak dikira sebagai belanja atau pendapatan.',
  tEnterAmt:'Masukkan jumlah',tPickAcc:'Pilih akaun',tPickBoth:'Pilih kedua-dua akaun',tSame:'Akaun dari dan ke sama',tUpdated:'Dikemas kini',tSaved:'Disimpan',tDeleted:'Dipadam',tAddAccFirst:'Tambah akaun dulu',tAccSaved:'Akaun disimpan',tEnterName:'Isi nama',tAccDeleted:'Akaun dipadam',tSure:'Pasti? Tekan lagi',
  tMatched:n=>`${n} dah sama dengan bank`,tValUpd:'Nilai dikemas kini',tEnterVal:'Masukkan nilai',tCopied:'Disalin',tBackup:'Sandaran disalin — tampal dalam Notes',tBadBackup:'Teks sandaran tak sah',tNotBackup:'Ni bukan sandaran Poket',tRestored:'Dipulihkan',
  tSaveFail:c=>`Gagal simpan (${c}).`,tFull:'Storan penuh — padam data lama atau buat sandaran.',
  newAcc:'Tambah akaun',editAcc:'Edit akaun',type:'Jenis',name:'Nama',
  phName:{bank:'cth: Maybank Savings',ewallet:"cth: Touch 'n Go",cash:'cth: Dompet',invest:'cth: ASB',property:'cth: Rumah Shah Alam',vehicle:'cth: Myvi 2022',asset:'cth: Barang kemas',cc:'cth: Maybank Visa',loan:'cth: Pinjaman kereta',bnpl:'cth: Atome'},
  invKind:'Jenis pelaburan',
  open:{bank:'Baki semasa',ewallet:'Baki semasa',cash:'Jumlah semasa',invest:'Modal setakat ni',property:'Nilai semasa',vehicle:'Nilai semasa',asset:'Nilai semasa',cc:'Hutang semasa',loan:'Baki pinjaman',bnpl:'Baki tertunggak'},
  openHintNew:'Angka hari ni. Poket kira dari sini.',openHintEdit:'Angka permulaan. Kalau lari dari bank, guna Semak.',
  limitLbl:'Had kredit',dueLbl:'Tarikh bayar',duePh:'cth: 15',monthlyLbl:'Bayaran bulanan',origLbl:'Jumlah asal',origHint:'Untuk tunjuk berapa banyak dah dibayar.',
  walletLbl:'Nama dalam Apple Wallet',walletPh:'cth: Maybank Visa, 1234',walletHint:'Untuk Shortcut. Asingkan dengan koma; 4 digit akhir pun boleh.',
  archive:'Arkib',unarchive:'Nyaharkib',
  checkT:n=>`Semak baki · ${n}`,checkB:l=>l?'Buka app bank dan taip <b>hutang sebenar</b>.':'Buka app bank dan taip <b>baki sebenar</b>.',
  inPoket:'Dalam Poket',actualDebt:'Hutang sebenar',actualBal:'Baki sebenar',matched:'Ngam — sama dengan bank',markChecked:'Tandakan dah semak',
  missingSpend:'Ada belanja tak tercatat.',missingInc:'Ada duit masuk tak tercatat.',tryRecall:'Semak tab Aktiviti dulu.',
  recExp:'Rekod sebagai belanja tertinggal',recInc:'Rekod sebagai duit masuk tertinggal',adjOnly:'Pelarasan je (bukan belanja)',adjHint:'Guna pelarasan untuk faedah, caj atau baki awal yang salah.',
  noteMissExp:'Belanja tak tercatat',noteMissInc:'Duit masuk tak tercatat',noteAdj:'Pelarasan baki',
  valT:n=>`Nilai semasa · ${n}`,valB:c=>`Taip nilai terkini (cth dari myASNB, Bursa, atau penilaian). Kos setakat ni: ${c}.`,saveVal:'Simpan nilai',
  impDone:'Import selesai',impNew:'Baru',impDup:'Dah ada',impUnk:n=>`${n} transaksi kadnya tak dikenali. Tekan setiap satu untuk pilih akaun.`,impBad:n=>`${n} baris tak ikut format dan dilangkau.`,ok:'OK',
  pasteT:'Tampal dari Shortcut',import:'Import',
  newCatT:k=>k==='exp'?'Kategori belanja baru':'Kategori masuk baru',newCatPh:'cth: Kucing',remove:'Buang',
  restoreB:'Semua data sekarang akan diganti dengan sandaran.',restoreSure:'Ganti semua? Tekan lagi',manualCopy:'Salin teks ni',
  budgetT:'Tetapkan bajet',budgetAmt:'Had bulanan',budgetHint:'Letak 0 untuk buang.',
  billT:'Bil atau langganan',billName:'Nama',billNamePh:'cth: Netflix, Unifi, sewa',billAmt:'Jumlah',billDay:'Hari bulan',billFreq:'Ulang',billAcc:'Bayar dari',
  goalT:'Matlamat simpanan',goalName:'Matlamat',goalNamePh:'cth: Dana kecemasan',goalTarget:'Jumlah sasaran',goalBy:'Tarikh sasaran (pilihan)',goalLink:'Jejak guna akaun (pilihan)',goalLinkHint:'Pilih akaun simpanan dan Poket guna bakinya. Biar kosong untuk tambah duit secara manual.',goalSaved:'Simpanan setakat ni',noLink:'Tiada — tambah manual',
  addMoneyT:n=>`Tambah ke ${n}`,
}};
let LANG=(()=>{try{return localStorage.getItem('poket.lang')||'en'}catch(e){return 'en'}})();
const T=()=>L[LANG]||L.en;
const t=(k,...a)=>{const v=T()[k]??L.en[k];return typeof v==='function'?v(...a):v};
function ordinal(d){d=+d;const s=['th','st','nd','rd'],v=d%100;return d+(s[(v-20)%10]||s[v]||s[0])}

/* ================= Helpers ================= */
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pad=n=>String(n).padStart(2,'0');
const dStr=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
const todayStr=()=>dStr(new Date());
const mKey=ds=>ds.slice(0,7);
const curMonth=()=>mKey(todayStr());
const mLabel=k=>{const [y,m]=k.split('-');return T().mon[+m-1]+' '+y};
const mLabelF=k=>{const [y,m]=k.split('-');return T().monF[+m-1]+(y!==String(new Date().getFullYear())?' '+y:'')};
const dLabel=ds=>{const y=new Date();y.setDate(y.getDate()-1);if(ds===todayStr())return t('today');if(ds===dStr(y))return t('yesterday');const [Y,M,D]=ds.split('-');return (+D)+' '+T().mon[+M-1]+(Y!==String(new Date().getFullYear())?' '+Y:'')};
const r2=n=>Math.round((+n||0)*100)/100;
const HIDE=()=>!!(typeof S!=='undefined'&&S.settings&&S.settings.privacy);
const RM=n=>{if(HIDE())return 'RM •••';n=r2(n);return (n<0?'-':'')+'RM'+Math.abs(n).toLocaleString('en-MY',{minimumFractionDigits:2,maximumFractionDigits:2})};
const RM0=n=>{if(HIDE())return 'RM •••';n=Math.round(+n||0);return (n<0?'-':'')+'RM'+Math.abs(n).toLocaleString('en-MY')};
const pct=n=>(isFinite(n)?(Math.round(n*10)/10):0)+'%';
const nid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const num=v=>{if(typeof v==='number')return v;return parseFloat(String(v||'').replace(/[^0-9.,-]/g,'').replace(/,/g,''))};
const norm=s=>String(s||'').toLowerCase().replace(/\s+/g,' ').trim();
function hash(s){let h=5381;for(let i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))|0;return (h>>>0).toString(36)}
let toastT;function toast(m){const el=$('#toast');el.textContent=m;el.classList.add('on');clearTimeout(toastT);toastT=setTimeout(()=>el.classList.remove('on'),2300)}

/* ================= Constants ================= */
const ACC_IC={bank:'bank',ewallet:'phone',cash:'cash',invest:'trend',property:'house',vehicle:'car',asset:'box',cc:'card',loan:'doc',bnpl:'clock'};
const ASSET_T=['bank','ewallet','cash','invest','property','vehicle','asset'];
const LIAB_T=['cc','loan','bnpl'];
const ACC_ORDER=[...ASSET_T,...LIAB_T];
const LIQUID=['bank','ewallet','cash'],VALUED=['invest','property','vehicle','asset'];
const isLiab=a=>a&&LIAB_T.includes(a.type);
const isValued=a=>a&&VALUED.includes(a.type);
const KINDS=['asb','stocks','ut','gold','crypto','th','epf','fd','other'];
const DEF_EXP=['food','groceries','fuel','transport','bills','housing','shopping','health','fun','subs','family','charity','edu','other'];
const DEF_INC=['salary','side','dividend','cashback','gift','otherIn'];
const LEG_CAT={'Makan & Minum':'food','Groceri':'groceries','Minyak & Tol':'fuel','Pengangkutan':'transport','Bil & Utiliti':'bills','Rumah & Sewa':'housing','Shopping':'shopping','Kesihatan':'health','Hiburan':'fun','Langganan':'subs','Keluarga':'family','Sedekah & Zakat':'charity','Pendidikan':'edu','Lain-lain':'other','Gaji':'salary','Sampingan':'side','Dividen':'dividend','Cashback & Rebat':'cashback','Hadiah':'gift'};
const LEG_KIND={'ASB / ASNB':'asb','Saham':'stocks','Unit Trust':'ut','Emas':'gold','Crypto':'crypto','Tabung Haji':'th','KWSP':'epf','Simpanan Tetap':'fd','Lain-lain':'other'};
const CAT_COL={food:'#E07A3F',groceries:'#3E9B5F',fuel:'#C9A227',transport:'#4F7DF3',bills:'#8B6FD6',housing:'#B5654A',shopping:'#D9558C',health:'#2FA4A0',fun:'#E05D5D',subs:'#6E7FD6',family:'#C98A3E',charity:'#3E9B8A',edu:'#5A8FC9',other:'#8A8A86',salary:'#12805C',side:'#3E9B5F',dividend:'#2FA4A0',cashback:'#C9A227',gift:'#D9558C',otherIn:'#8A8A86'};
const PAL=['#4F7DF3','#E07A3F','#3E9B5F','#8B6FD6','#D9558C','#2FA4A0','#C9A227','#E05D5D','#5A8FC9','#B5654A'];
const catCol=k=>CAT_COL[k]||PAL[parseInt(hash(k),36)%PAL.length];
const catLabel=k=>T().cats[k]||L.en.cats[k]||k;
const kindLabel=k=>T().kinds[k]||k||'';
const KW=[[/grab ?food|foodpanda|shopeefood|mcd|mcdonald|kfc|starbucks|zus|tealive|kopi|cafe|restoran|restaurant|nasi|mamak|subway|domino|pizza|secret recipe|marrybrown|richiamo|chagee|mixue/i,'food'],[/tesco|lotus|mydin|giant|aeon|jaya grocer|village grocer|speedmart|family ?mart|7-?eleven|kk mart|econsave|nsk/i,'groceries'],[/petronas|shell|petron|caltex|bhpetrol|setel|smarttag/i,'fuel'],[/grab|bolt|airasia ride|maxim|mrt|lrt|ktm|rapid|parking/i,'transport'],[/tnb|tenaga|syabas|air selangor|indah water|unifi|maxis|celcom|digi|umobile|u mobile|astro|time ?dotcom/i,'bills'],[/netflix|spotify|youtube|apple\.com|icloud|disney|viu|chatgpt|openai|claude|anthropic|google one|canva/i,'subs'],[/shopee|lazada|tiktok shop|uniqlo|zara|h&m|ikea|mr ?diy|daiso|decathlon|sephora/i,'shopping'],[/watsons|guardian|caring|klinik|clinic|hospital|farmasi|pharmacy/i,'health'],[/gsc|tgv|mbo|cinema|steam|playstation|xbox/i,'fun']];

/* ================= State ================= */
const S={accounts:[],settings:{},plan:{},months:{},ready:false,mode:'loading',err:'',viewMonth:curMonth(),txFilter:'all',txQuery:'',expand:{}};
let DB=null,COL=null,UID=null;
const exCats=()=>S.settings.expCats||DEF_EXP;
const inCats=()=>S.settings.incCats||DEF_INC;
const accs=all=>S.accounts.filter(a=>all||!a.archived);
const accById=id=>S.accounts.find(a=>a.id===id);
const allTx=()=>Object.values(S.months).flat();
const P_=()=>{S.plan.budgets=S.plan.budgets||{};S.plan.bills=S.plan.bills||[];S.plan.goals=S.plan.goals||[];return S.plan};

/* ================= Persistence ================= */
let wq=Promise.resolve();
function enqueue(fn){wq=wq.then(fn).catch(e=>{console.error(e);toast(e&&e.code==='quota_exceeded'?t('tFull'):t('tSaveFail',(e&&e.code)||'error'))});return wq}
const PFX='poket:';
function saveDoc(id,data){try{localStorage.setItem(PFX+id,JSON.stringify(data));}catch(e){console.error(e);toast(e&&e.name==='QuotaExceededError'?t('tFull'):t('tSaveFail','storage'))}return Promise.resolve()}
const saveAccounts=()=>saveDoc('accounts',{list:S.accounts});
const saveSettings=()=>saveDoc('settings',S.settings);
const savePlan=()=>saveDoc('plan',P_());
const saveMonth=k=>saveDoc('m-'+k,{items:S.months[k]||[]});
function putTx(tx,old){
  const touched=new Set();
  if(old){const ok=mKey(old.date);S.months[ok]=(S.months[ok]||[]).filter(x=>x.id!==old.id);touched.add(ok)}
  const k=mKey(tx.date);S.months[k]=(S.months[k]||[]).filter(x=>x.id!==tx.id).concat([tx]);touched.add(k);
  touched.forEach(saveMonth);
}
function delTx(tx){const k=mKey(tx.date);S.months[k]=(S.months[k]||[]).filter(x=>x.id!==tx.id);saveMonth(k)}

/* ================= Calculations ================= */
// Every transaction changes an account's asset value; liabilities show debt = -asset value.
function computeBalances(){
  const b={};
  S.accounts.forEach(a=>{b[a.id]=isLiab(a)?-(+a.opening||0):(+a.opening||0)});
  for(const x of allTx()){
    if(x.pending)continue;const v=+x.amt||0;
    if(x.t==='exp'&&x.from in b)b[x.from]-=v;
    else if(x.t==='inc'&&x.to in b)b[x.to]+=v;
    else if(x.t==='trf'){if(x.from in b)b[x.from]-=v;if(x.to in b)b[x.to]+=v}
    else if(x.t==='adj'&&x.from in b)b[x.from]+=v;
  }
  Object.keys(b).forEach(k=>b[k]=r2(b[k]));
  return b;
}
const shown=(a,b)=>isLiab(a)?-b[a.id]:isValued(a)?valueOf(a,b):b[a.id];
function valueOf(a,b){const cost=b[a.id];if(a.value==null)return cost;return r2(+a.value+(cost-(+a.costAtValue||0)))}
function profile(){
  const b=computeBalances();const r={b,liquid:0,inv:0,invCost:0,phys:0,cc:0,loans:0,bnpl:0,loanOnly:0,limit:0,commit:0,debtMonthly:0};
  accs().forEach(a=>{
    if(a.type==='cc'){r.cc+=-b[a.id];r.limit+=(+a.limit||0)}
    else if(a.type==='loan'||a.type==='bnpl'){const d=-b[a.id];if(a.type==='bnpl')r.bnpl+=d;else r.loanOnly+=d;r.loans+=d;if(d>0){r.commit+=(+a.monthly||0);r.debtMonthly+=(+a.monthly||0)}}
    else if(a.type==='invest'){r.inv+=valueOf(a,b);r.invCost+=b[a.id]}
    else if(VALUED.includes(a.type))r.phys+=valueOf(a,b);
    else r.liquid+=b[a.id];
  });
  r.assets=r2(r.liquid+r.inv+r.phys);r.debt=r2(r.cc+r.loans);r.net=r2(r.assets-r.debt);
  r.commit+=billsMonthly();
  return r;
}
function monthStats(k){
  const tx=(S.months[k]||[]).filter(x=>!x.pending);
  let exp=0,inc=0,invested=0,debtPaid=0;const byCat={},byAcc={};
  for(const x of tx){
    const v=+x.amt||0;
    if(x.t==='exp'){exp+=v;const c=x.cat||'other';byCat[c]=(byCat[c]||0)+v;byAcc[x.from]=(byAcc[x.from]||0)+v}
    else if(x.t==='inc')inc+=v;
    else if(x.t==='trf'){const fa=accById(x.from),ta=accById(x.to);
      if(isLiab(ta))debtPaid+=v;
      if(ta&&ta.type==='invest'&&!(fa&&fa.type==='invest'))invested+=v;
      if(fa&&fa.type==='invest'&&!(ta&&ta.type==='invest'))invested-=v;}
  }
  return {exp:r2(exp),inc:r2(inc),invested:r2(invested),debtPaid:r2(debtPaid),byCat,byAcc};
}
function prevMonths(n){const out=[];const d=new Date();for(let i=1;i<=n;i++){const x=new Date(d.getFullYear(),d.getMonth()-i,1);out.push(x.getFullYear()+'-'+pad(x.getMonth()+1))}return out}
function avgMonthly(){
  const ks=prevMonths(3).filter(k=>S.months[k]&&S.months[k].length);
  if(!ks.length){const m=monthStats(curMonth());return {exp:m.exp,inc:m.inc}}
  let e=0,i=0;ks.forEach(k=>{const m=monthStats(k);e+=m.exp;i+=m.inc});return {exp:e/ks.length,inc:i/ks.length};
}
function billsMonthly(){return (S.plan.bills||[]).reduce((s,b)=>s+(b.freq==='y'?(+b.amt||0)/12:(+b.amt||0)),0)}
function billPaid(b){const ck=curMonth();if(b.freq==='y'){return b.lastPaid&&b.lastPaid.slice(0,4)===ck.slice(0,4)}return b.lastPaid===ck}
function billDueThisMonth(b){if(b.freq!=='y')return true;return +b.month===new Date().getMonth()+1}
function upcomingBills(days){
  const now=new Date(),d=now.getDate();
  return (S.plan.bills||[]).filter(b=>billDueThisMonth(b)&&!billPaid(b)).map(b=>({b,diff:(+b.day||1)-d})).filter(x=>x.diff<=days).sort((a,b)=>a.diff-b.diff);
}
function guessCat(note,type){
  const k=norm(note);if(!k)return '';
  const rules=S.settings.rules||{};
  if(rules[k])return rules[k];
  for(const rk in rules){if(rk.length>3&&k.includes(rk))return rules[rk]}
  if(type!=='inc')for(const [re,c] of KW){if(re.test(k)&&exCats().includes(c))return c}
  return '';
}
function matchAcc(card){
  const c=norm(card);if(!c)return null;
  const digits=(c.match(/\d{4}/g)||[]).pop();
  for(const a of accs()){if([a.name,...(a.alias||[])].map(norm).some(n=>n&&n===c))return a}
  for(const a of accs()){
    const names=[a.name,...(a.alias||[])].map(norm).filter(n=>n.length>=3);
    if(names.some(n=>c.includes(n)||n.includes(c)))return a;
    if(digits&&names.some(n=>n.includes(digits)))return a;
  }
  return null;
}
const looksLikeCcPay=s=>/(bayar|payment|pay).{0,12}(kad|card|cc|credit)|kad kredit|credit card|\bcc\b/i.test(s||'');

/* ================= UI bits ================= */
const TABS=[['home','home'],['activity','list'],['portfolio','pie'],['debts','card'],['goals','target']];
const ROUTES=['home','activity','portfolio','debts','goals','settings'];
function route(){const h=(location.hash||'').slice(1);return ROUTES.includes(h)?h:'home'}
function notice(text,cls,btn){return `<div class="notice ${cls||''}"><span class="ind"></span><div class="tx">${text}</div>${btn||''}</div>`}
const sec=(title,right)=>`<div class="sec"><h2>${title}</h2>${right||''}</div>`;
const link=(label,act,v)=>`<span class="lnk" data-act="${act}" ${v?`data-v="${v}"`:''}>${label}</span>`;
const catAv=k=>{const c=catCol(k);return `<div class="av" style="background:${c}1F;color:${c}">${esc((catLabel(k)||'?').trim().charAt(0).toUpperCase())}</div>`};
const accAv=type=>`<div class="av">${ic(ACC_IC[type]||'card')}</div>`;
const icAv=n=>`<div class="av">${ic(n)}</div>`;
function prog(v,max,inverse){const p=max>0?v/max*100:0;const cls=inverse?(p>100?'over':p>85?'warn':''):'';return `<div class="prog ${cls}"><span style="width:${Math.max(1.5,Math.min(100,p))}%"></span></div>`}
function monthHead(){return `<div class="mhead"><b>${mLabelF(S.viewMonth)}</b><div class="nav"><button class="icbtn" data-act="month" data-v="-1">${ic('left')}</button><button class="icbtn" data-act="month" data-v="1">${ic('right')}</button></div></div>`}
function barList(obj,total,avFn,labelFn,colFn,key){
  let ent=Object.entries(obj).filter(e=>e[1]>0).sort((a,b)=>b[1]-a[1]);
  if(!ent.length)return `<div class="empty">${t('noSpend')}</div>`;
  const more=ent.length>5,open=S.expand[key];if(more&&!open)ent=ent.slice(0,5);
  return ent.map(([k,v])=>`<div class="row">${avFn(k)}<div class="mid"><div style="display:flex;justify-content:space-between;gap:10px"><span class="t1">${esc(labelFn(k))}</span><span class="amt">${RM(v)}</span></div><div class="meter"><span style="width:${Math.max(2,v/total*100)}%;background:${colFn(k)}"></span></div></div></div>`).join('')+(more?`<div class="row tap" data-act="expand" data-v="${key}" style="justify-content:center;font-size:12px;font-weight:600;color:var(--muted)">${open?t('showLess'):t('showAll')}</div>`:'');
}
function pendingCount(){let p=0,r=0;allTx().forEach(x=>{if(x.pending)p++;else if(x.rev)r++});return {p,r}}
function txRow(x){
  const fa=accById(x.from),ta=accById(x.to);let av,title,sub,amt,cls='';
  if(x.t==='exp'){av=catAv(x.cat||'other');title=x.note||catLabel(x.cat);sub=catLabel(x.cat||'other')+' · '+(fa?fa.name:t('pickAcc'));amt='-'+RM(x.amt)}
  else if(x.t==='inc'){av=catAv(x.cat||'otherIn');title=x.note||catLabel(x.cat);sub=catLabel(x.cat||'otherIn')+' · '+(ta?ta.name:t('pickAcc'));amt='+'+RM(x.amt);cls='pos'}
  else if(x.t==='trf'){const l=isLiab(ta),inv=ta&&ta.type==='invest';av=icAv(l?ACC_IC[ta.type]:inv?'trend':'swap');title=x.note||(l?t('tPayCard',ta.name):inv?t('tInvestTo',ta.name):t('tTransfer'));sub=(fa?fa.name:'?')+' → '+(ta?ta.name:'?');amt=RM(x.amt);cls='mut'}
  else {av=icAv('scale');title=x.note||t('tAdj');sub=(fa?fa.name:'?')+' · '+t('notCounted');amt=(x.amt>=0?'+':'')+RM(x.amt);cls='mut'}
  const flag=x.pending?'<span class="dot"></span>':x.rev?'<span class="dot blue"></span>':'';
  const badge=x.t==='trf'&&isLiab(ta)?`<span class="badge">${t('notSpend')}</span>`:'';
  return `<div class="row tap" data-act="editTx" data-v="${x.id}">${av}<div class="mid"><div class="t1">${esc(title)}${flag}${badge}</div><div class="t2">${esc(sub)}</div></div><div class="amt ${cls}">${amt}</div></div>`;
}
function modeBanner(){
  if(S.mode==='local')return notice(t('bPreview'));
  if(S.mode==='offline')return notice(t('bOffline'));
  if(S.mode==='error')return notice(esc(t('bErr',S.err)),'err');
  return '';
}

/* ================= Views ================= */
function render(){
  document.documentElement.lang=LANG;
  const th=S.settings.theme||'auto';if(th==='auto')document.documentElement.removeAttribute('data-theme');else document.documentElement.setAttribute('data-theme',th);
  const r=route();
  $('#tabs').innerHTML=TABS.map(([k,i])=>`<button data-act="tab" data-v="${k}" class="${k===r?'on':''}">${ic(i)}${T().tabs[k]}</button>`).join('');
  $('#status').className='status'+(S.mode==='db'?' ok':'');
  $('#fab').innerHTML=ic('plus');
  $('#fab').style.display=(r==='settings'||r==='goals'||!S.ready)?'none':'';
  $('#gear').className='icbtn'+(r==='settings'?' on':'');
  if(!S.ready){$('#view').innerHTML=`<div class="empty">${t('loading')}</div>`;return}
  $('#view').innerHTML=modeBanner()+({home:()=>typeof vDash==='function'?vDash():vHome(),activity:vAct,portfolio:vPort,debts:vDebts,goals:vGoals,settings:vSettings}[r])();
}

function vHome(){
  const name=(S.settings.profile||{}).name;
  let h=`<div class="greet">${t('hi',esc(name||''))}</div>`;
  if(!accs().length)return h+`<div class="hero"><div class="big" style="font-size:22px">${t('welcomeT')}</div></div><p class="p">${t('welcomeB')}</p><div class="btns"><button class="btn sm" data-act="newAcc" data-v="bank">${ic('plus')}${t('addAccount')}</button><button class="btn sm ghost" data-act="help">${t('guide')}</button></div>`;
  const P=profile(),M=monthStats(S.viewMonth),pc=pendingCount();
  h+=`<div class="hero tap" data-act="tab" data-v="portfolio"><div class="lbl">${t('netWorth')}</div><div class="big">${RM(P.net)}</div><div class="sub">${t('assets')} ${RM0(P.assets)} · ${t('liabilities')} ${RM0(P.debt)}</div></div>`;
  let n='';
  if(pc.p)n+=notice(t('unassigned',pc.p),'',`<button class="btn xs" data-act="goReview">${t('review')}</button>`);
  else if(pc.r)n+=notice(t('fromShortcut',pc.r),'ok',`<button class="btn xs ghost" data-act="goReview">${t('view')}</button>`);
  {const d=new Date().getDate();accs().filter(a=>isLiab(a)&&a.dueDay&&P.b[a.id]<0&&!debtPaidThisMonth(a)).forEach(a=>{const diff=(+a.dueDay)-d;if(diff<=3)n+=notice(esc(t('dueSoon',a.name,diff===0?t('today').toLowerCase():ordinal(a.dueDay))),diff<0?'err':'',`<button class="btn xs ghost" data-act="payCard" data-v="${a.id}">${t('pay')}</button>`)})}
  upcomingBills(3).slice(0,2).forEach(({b,diff})=>{n+=notice(esc(t('dueSoon',b.name,diff<0?ordinal(b.day):diff===0?t('today').toLowerCase():ordinal(b.day))),diff<0?'err':'',`<button class="btn xs ghost" data-act="billPay" data-v="${b.id}">${t('pay')}</button>`)});
  const cm=monthStats(curMonth());
  Object.entries(P_().budgets).forEach(([c,lim])=>{const sp=cm.byCat[c]||0;if(lim>0&&sp>lim)n+=notice(esc(t('overBudget',catLabel(c))),'err');});
  const stale=accs().filter(a=>(LIQUID.includes(a.type)||a.type==='cc')&&(!a.lastCheck||(Date.now()-new Date(a.lastCheck))>7*864e5));
  if(stale.length)n+=notice(t('stale','<b>'+stale.slice(0,2).map(a=>esc(a.name)).join(', ')+(stale.length>2?'…':'')+'</b>'),'',`<button class="btn xs ghost" data-act="check" data-v="${stale[0].id}">${t('check')}</button>`);
  if(accs().length&&(!S.settings.lastBackup||(Date.now()-new Date(S.settings.lastBackup))>14*864e5))n+=notice(S.settings.lastBackup?t('backupNudge'):t('backupFirst'),'',`<button class="btn xs ghost" data-act="backup">${t('sBackup')}</button>`);
  if(n)h+=`<div style="margin-top:10px">${n}</div>`;
  h+=`<div class="qa"><button data-act="addType" data-v="exp">${ic('minus')}${t('qSpend')}</button><button data-act="addType" data-v="inc">${ic('in')}${t('qIncome')}</button><button data-act="addType" data-v="trf">${ic('swap')}${t('qTransfer')}</button><button data-act="importSheet">${ic('save')}${t('qImport')}</button></div>`;
  const left=M.inc-M.exp;
  h+=`<div class="card" style="margin-top:8px">${monthHead()}<div class="kv"><div><div class="l">${t('spent')}</div><div class="v">${RM0(M.exp)}</div></div><div><div class="l">${t('income')}</div><div class="v pos">${RM0(M.inc)}</div></div><div><div class="l">${t('left')}</div><div class="v ${left<0?'neg':''}">${RM0(left)}</div></div><div><div class="l">${t('invested')}</div><div class="v">${RM0(M.invested)}</div></div></div>${M.inc?`<div class="small" style="margin-top:8px">${t('savingsRate',pct(left/M.inc*100))}</div>`:''}${M.debtPaid?`<div class="msg ok" style="margin:8px 0 0">${t('ccPaidNote',RM(M.debtPaid))}</div>`:''}</div>`;
  const bud=Object.entries(P_().budgets).filter(e=>e[1]>0);
  h+=sec(t('budgets')+' · '+mLabel(S.viewMonth),link(bud.length?t('editLbl'):'+ '+t('setBudget'),'budget'));
  if(bud.length){
    let rows=bud.sort((a,b)=>((M.byCat[b[0]]||0)/b[1])-((M.byCat[a[0]]||0)/a[1]));const more=rows.length>4&&!S.expand.bud;if(more)rows=rows.slice(0,4);
    h+=`<div class="card list">`+rows.map(([c,lim])=>{const sp=M.byCat[c]||0,lf=lim-sp;return `<div class="row tap" data-act="budget" data-v="${esc(c)}">${catAv(c)}<div class="mid"><div style="display:flex;justify-content:space-between;gap:8px"><span class="t1">${esc(catLabel(c))}</span><span class="small ${lf<0?'neg':''}">${lf>=0?t('budgetLeft',RM0(lf)):t('budgetOver',RM0(-lf))}</span></div>${prog(sp,lim,true)}<div class="t2" style="margin-top:3px">${RM0(sp)} / ${RM0(lim)}</div></div></div>`}).join('')+(bud.length>4?`<div class="row tap" data-act="expand" data-v="bud" style="justify-content:center;font-size:12px;font-weight:600;color:var(--muted)">${S.expand.bud?t('showLess'):t('showAll')}</div>`:'')+`</div>`;
  } else h+=`<div class="card"><p class="small" style="margin:0">${t('noBudgets')}</p></div>`;
  h+=sec(t('byCategory'),`<span>${RM(M.exp)}</span>`)+`<div class="card list">${barList(M.byCat,M.exp,catAv,catLabel,catCol,'cat')}</div>`;
  h+=sec(t('byAccount'))+`<div class="card list">${barList(M.byAcc,M.exp,k=>accAv((accById(k)||{}).type),k=>(accById(k)||{}).name||t('deletedAcc'),k=>isLiab(accById(k))?'var(--neg)':'var(--ink)','acc')}</div>`;
  const recent=allTx().slice().sort((a,b)=>(b.date+(b.ts||'')).localeCompare(a.date+(a.ts||''))).slice(0,5);
  if(recent.length)h+=sec(t('recent'),link(t('seeAll'),'tab','activity'))+`<div class="card list">${recent.map(txRow).join('')}</div>`;
  return h;
}

function vTx(){
  let list=(S.months[S.viewMonth]||[]).slice();
  const f=S.txFilter,q=norm(S.txQuery);
  if(f==='review')list=allTx().filter(x=>x.pending||x.rev);
  else if(f!=='all')list=list.filter(x=>x.t===f);
  if(q)list=list.filter(x=>norm([x.note,catLabel(x.cat||''),(accById(x.from)||{}).name,(accById(x.to)||{}).name,x.amt].join(' ')).includes(q));
  list.sort((a,b)=>(b.date+(b.ts||'')).localeCompare(a.date+(a.ts||'')));
  const pc=pendingCount(),rc=pc.p+pc.r;
  let h=f==='review'?'':`<div class="card" style="padding:8px 12px;margin-top:4px">${monthHead().replace('class="mhead"','class="mhead" style="margin:0"')}</div>`;
  h+=`<label class="search">${ic('search')}<input id="txq" placeholder="${esc(t('searchPh'))}" value="${esc(S.txQuery)}"></label>`;
  h+=`<div class="chips">${[['all','fAll'],['exp','fExp'],['inc','fInc'],['trf','fTrf'],['adj','fAdj'],['review','fRev']].map(([k,l])=>`<button class="chip ${f===k?'on':''}" data-act="filter" data-v="${k}">${t(l)}${k==='review'&&rc?' · '+rc:''}</button>`).join('')}</div>`;
  if(!list.length)return h+`<div class="empty">${f==='review'?t('noReview'):t('noTx',mLabel(S.viewMonth))}</div>`;
  const byDay={};list.forEach(x=>(byDay[x.date]=byDay[x.date]||[]).push(x));
  for(const d of Object.keys(byDay)){
    const dayExp=byDay[d].filter(x=>x.t==='exp'&&!x.pending).reduce((s,x)=>s+(+x.amt||0),0);
    h+=`<div class="dayhead"><span>${dLabel(d)}</span><span>${dayExp?'-'+RM(dayExp):''}</span></div><div class="card list">${byDay[d].map(txRow).join('')}</div>`;
  }
  return h;
}

function healthRows(P){
  const avg=avgMonthly();const rows=[];
  const em=avg.exp>0?P.liquid/avg.exp:null;
  rows.push([t('hEmerg'),em==null?t('na'):t('hEmergV',Math.round(em*10)/10),em==null?'':em>=6?'good':em>=3?'ok':'bad',t('hEmergTip')]);
  const dr=P.assets>0?P.debt/P.assets*100:null;
  rows.push([t('hDebt'),dr==null?t('na'):pct(dr),dr==null?'':dr<30?'good':dr<50?'ok':'bad',t('hDebtTip')]);
  if(P.limit){const u=P.cc/P.limit*100;rows.push([t('hUtil'),pct(u),u<30?'good':u<50?'ok':'bad',t('hUtilTip')])}
  const sr=avg.inc>0?(avg.inc-avg.exp)/avg.inc*100:null;
  rows.push([t('hSave'),sr==null?t('na'):pct(sr),sr==null?'':sr>=20?'good':sr>=10?'ok':'bad',t('hSaveTip')]);
  const cr=avg.inc>0?P.commit/avg.inc*100:null;
  rows.push([t('hCommit'),RM0(P.commit)+(cr!=null?' · '+pct(cr):''),cr==null?'':cr<40?'good':cr<60?'ok':'bad',t('hCommitTip')]);
  const lbl={good:t('good'),ok:t('ok'),bad:t('bad')};
  return rows.map(([n,v,st,tip])=>`<div class="row"><div class="mid"><div class="t1">${n}</div><div class="t2" style="white-space:normal">${tip}</div></div><div style="text-align:right"><div class="amt">${v}</div>${st?`<span class="pill ${st}">${lbl[st]}</span>`:''}</div></div>`).join('');
}
function accRow(a,b){
  const v=shown(a,b);let sub='',acts='';
  if(LIQUID.includes(a.type)){sub=a.lastCheck?t('checked',dLabel(a.lastCheck).toLowerCase()):t('neverChecked');acts=`<button class="btn xs ghost" data-act="check" data-v="${a.id}">${t('check')}</button>`}
  else if(a.type==='invest'){const g=v-b[a.id];sub=kindLabel(a.kind)+` · <span class="${g>=0?'pos':'neg'}">${g>=0?'+':''}${RM0(g)}</span>`;acts=`<button class="btn xs ghost" data-act="val" data-v="${a.id}">${t('update')}</button>`}
  else if(VALUED.includes(a.type)){sub=a.valueDate?t('updated',dLabel(a.valueDate).toLowerCase()):T().acct[a.type];acts=`<button class="btn xs ghost" data-act="val" data-v="${a.id}">${t('update')}</button>`}
  else if(a.type==='cc'){const u=a.limit?v/a.limit*100:0;sub=(a.limit?`${pct(u)} ${t('used')}`:t('noLimit'))+(a.dueDay?' · '+t('payBy',a.dueDay):'');acts=`<button class="btn xs ghost" data-act="payCard" data-v="${a.id}">${t('pay')}</button><button class="btn xs ghost" data-act="check" data-v="${a.id}">${t('check')}</button>`}
  else {const orig=+a.orig||0;sub=(a.monthly?t('perMonth',RM0(a.monthly)):'')+(a.dueDay?' · '+t('payBy',a.dueDay):'');acts=`<button class="btn xs ghost" data-act="payCard" data-v="${a.id}">${t('pay')}</button><button class="btn xs ghost" data-act="check" data-v="${a.id}">${t('check')}</button>`}
  let extra='';
  if(a.type==='cc'&&a.limit){const u=v/a.limit*100;extra=`<div class="meter"><span style="width:${Math.min(100,Math.max(1,u))}%;background:${u>70?'var(--neg)':u>30?'var(--warn)':'var(--pos)'}"></span></div>`}
  if(a.type==='loan'||a.type==='bnpl'){const n=debtLeftMonths(a,v);const bits=[];if(+a.orig)bits.push(t('paidOff',pct((1-v/(+a.orig))*100)));if(n)bits.push(t('nLeft',n)+' · '+t('freeOn',mLabel(addMonths(n))));extra=(+a.orig?prog((+a.orig)-v,+a.orig):'')+(bits.length?`<div class="t2" style="margin-top:3px;white-space:normal">${bits.join(' · ')}</div>`:'')}
  return `<div class="row">${accAv(a.type)}<div class="mid tap" data-act="acc" data-v="${a.id}"><div class="t1">${esc(a.name)}</div><div class="t2">${sub.replace(/^ · /,'')}</div>${extra}</div><div style="text-align:right"><div class="amt">${RM(v)}</div><div class="acts">${acts}</div></div></div>`;
}
function vPort(){
  const P=profile(),b=P.b;
  const dr=P.assets>0?P.debt/P.assets*100:0;
  let h=`<div class="hero"><div class="lbl">${t('netWorth')}</div><div class="big">${RM(P.net)}</div></div>`;
  h+=`<div class="stats"><div><div class="l">${t('assets')}</div><div class="v">${RM0(P.assets)}</div></div><div><div class="l">${t('liabilities')}</div><div class="v">${RM0(P.debt)}</div></div><div><div class="l">${t('debtRatio')}</div><div class="v">${pct(dr)}</div></div></div>`;
  const groups=[['liquid',a=>LIQUID.includes(a.type)],['invest',a=>a.type==='invest'],['physical',a=>['property','vehicle','asset'].includes(a.type)]];
  h+=`<div class="subhead" style="margin-top:16px">${t('grpAssets')}</div>`;
  let any=false;
  for(const [g,f] of groups){const list=accs().filter(f);if(!list.length)continue;any=true;const tot=list.reduce((s,a)=>s+shown(a,b),0);
    let right=`<span>${RM(tot)}</span>`;
    if(g==='invest'){const pl=P.inv-P.invCost;right=`<span><span class="${pl>=0?'pos':'neg'}">${pl>=0?'+':''}${RM0(pl)}</span> · ${RM(tot)}</span>`}
    h+=sec(T().grp[g],right)+`<div class="card list">${list.map(a=>accRow(a,b)).join('')}</div>`;
    if(g==='invest')h+=`<div class="btns" style="margin:-2px 0 4px"><button class="btn xs ghost" data-act="addType" data-v="invest">${ic('plus')}${t('invest')}</button><button class="btn xs ghost" data-act="addType" data-v="withdraw">${t('withdraw')}</button></div>`;
  }
  if(!any)h+=`<div class="empty">${t('welcomeB')}</div>`;
  if(accs().some(isLiab)){h+=`<div class="subhead" style="margin-top:16px">${t('grpLiab')}</div>`+sec(t('debtTotal'),link(t('viewDebts')+' →','tab','debts'))+`<div class="card list">`+[['cc',P.cc,'card'],['bnpl',P.bnpl,'clock'],['loans',P.loanOnly,'doc']].filter(x=>x[1]>0).map(([g,v,i])=>`<div class="row tap" data-act="tab" data-v="debts">${icAv(i)}<div class="mid"><div class="t1">${T().grp[g]}</div></div><div class="amt">${RM(v)}</div></div>`).join('')+`</div>`}
  h+=`<button class="btn sm ghost block" style="margin-top:10px" data-act="newAcc">${ic('plus')}${t('addAccount')}</button>`;
  // allocation
  const al={liquid:P.liquid,invest:P.inv,physical:P.phys};const tot=Object.values(al).filter(v=>v>0).reduce((x,y)=>x+y,0);
  if(tot>0){const gc={liquid:'#4F7DF3',invest:'#12805C',physical:'#C9A227'};
    h+=sec(t('allocation'))+`<div class="card"><div class="stack">${Object.entries(al).filter(e=>e[1]>0).map(([k,v])=>`<span style="width:${v/tot*100}%;background:${gc[k]}"></span>`).join('')}</div><div class="legend">${Object.entries(al).filter(e=>e[1]>0).map(([k,v])=>`<span><i style="background:${gc[k]}"></i>${T().grp[k]} ${pct(v/tot*100)}</span>`).join('')}</div></div>`;}
  if(accs().length)h+=sec(t('health'))+`<div class="card list">${healthRows(P)}</div>`;
  h+=sec(t('manageT'),link(S.expand.tips?t('showLess'):t('showAll'),'expand','tips'))+`<div class="card list">${T().tips.slice(0,S.expand.tips?99:3).map(([a,b],i)=>`<div class="tip"><span class="n">${i+1}</span><div><b>${a}.</b> ${b}</div></div>`).join('')}</div><p class="small" style="margin:4px 2px">${t('manageNote')}</p>`;
  const arch=S.accounts.filter(a=>a.archived);
  if(arch.length)h+=sec(t('archived'))+`<div class="card list">${arch.map(a=>`<div class="row tap" data-act="acc" data-v="${a.id}">${accAv(a.type)}<div class="mid"><div class="t1 mut">${esc(a.name)}</div></div></div>`).join('')}</div>`;
  return h;
}

function vGoals(){
  const pl=P_(),b=computeBalances();
  let tot=0,sv=0;
  const rows=pl.goals.map(g=>{const a=accById(g.acc);const saved=a?Math.max(0,shown(a,b)):(+g.saved||0);const tg=+g.target||0;tot+=tg;sv+=Math.min(saved,tg);const done=saved>=tg&&tg>0;
    let need='';if(!done&&g.by){const d=new Date(g.by+'-01');const n=(d.getFullYear()-new Date().getFullYear())*12+(d.getMonth()-new Date().getMonth());if(n>0)need=t('goalNeed',RM0((tg-saved)/n))}
    return `<div class="row">${icAv('target')}<div class="mid tap" data-act="goal" data-v="${g.id}"><div style="display:flex;justify-content:space-between;gap:8px"><span class="t1">${esc(g.name)}</span><span class="small">${RM0(saved)} / ${RM0(tg)}</span></div>${prog(saved,tg)}<div class="t2" style="margin-top:3px;white-space:normal">${done?t('goalDone'):pct(tg?saved/tg*100:0)+(g.by?' · '+mLabel(g.by):'')+(need?' · '+need:'')}${a?' · '+esc(a.name):''}</div></div>${!a&&!done?`<button class="icbtn" data-act="goalAdd" data-v="${g.id}">${ic('plus')}</button>`:''}</div>`});
  let h=`<div class="hero"><div class="lbl">${t('goals')}</div><div class="big">${RM(sv)}</div><div class="sub">${tot?pct(sv/tot*100)+' · ':''}${RM0(tot)}</div></div>`;
  h+=sec('',link('+ '+t('addGoal'),'goal'));
  h+=`<div class="card list">`+(rows.length?rows.join(''):`<div class="empty">${t('noGoals')}</div>`)+`</div>`;
  return h;
}
function debtPaidThisMonth(a){const ck=curMonth();return (S.months[ck]||[]).some(x=>!x.pending&&x.t==='trf'&&x.to===a.id)}
function debtLeftMonths(a,v){return (+a.monthly>0&&v>0)?Math.ceil(v/(+a.monthly)):null}
function addMonths(n){const d=new Date();d.setMonth(d.getMonth()+n-1);return d.getFullYear()+'-'+pad(d.getMonth()+1)}
function vDebts(){
  const P=profile(),b=P.b;const list=accs().filter(isLiab);
  let h=`<div class="hero"><div class="lbl">${t('debtTotal')}</div><div class="big">${RM(P.debt)}</div></div>`;
  let lastFree=null;list.forEach(a=>{const v=shown(a,b);const n=a.type==='cc'?null:debtLeftMonths(a,v);if(n&&(!lastFree||n>lastFree))lastFree=n});
  const util=P.limit?P.cc/P.limit*100:null;
  h+=`<div class="stats"><div><div class="l">${t('debtMonthly')}</div><div class="v">${RM0(P.debtMonthly)}</div></div><div><div class="l">${t('hUtil')}</div><div class="v">${util==null?'—':pct(util)}</div></div><div><div class="l">${t('debtFreeBy')}</div><div class="v">${lastFree?mLabel(addMonths(lastFree)):'—'}</div></div></div>`;
  if(!list.length)return h+`<div class="card" style="margin-top:12px"><p class="small" style="margin:0 0 10px">${t('noDebtsYet')}</p><div class="btns"><button class="btn sm" data-act="newAcc" data-v="cc">${ic('plus')}${T().acct.cc}</button><button class="btn sm ghost" data-act="newAcc" data-v="bnpl">${ic('plus')}BNPL</button><button class="btn sm ghost" data-act="newAcc" data-v="loan">${ic('plus')}${T().acct.loan}</button></div></div>`;
  // due this month
  const due=list.filter(a=>shown(a,b)>0&&a.dueDay).map(a=>({a,paid:debtPaidThisMonth(a)})).sort((x,y)=>(+x.a.dueDay)-(+y.a.dueDay));
  if(due.length){
    const d=new Date().getDate();
    h+=sec(t('dueThisMonth')+' · '+mLabel(curMonth()))+`<div class="card list">`+due.map(({a,paid})=>{const amt=a.type==='cc'?shown(a,b):Math.min(+a.monthly||0,shown(a,b));const late=!paid&&+a.dueDay<d;
      return `<div class="row">${accAv(a.type)}<div class="mid"><div class="t1">${esc(a.name)}</div><div class="t2 ${late?'neg':''}">${t('payBy',a.dueDay)}</div></div><div style="text-align:right"><div class="amt">${RM(amt)}</div><div class="acts">${paid?`<span class="pill good">${t('paidMonth')}</span>`:`<button class="btn xs ${late?'':'ghost'}" data-act="payCard" data-v="${a.id}">${t('pay')}</button>`}</div></div></div>`}).join('')+`</div>`;
  }
  for(const [g,f,ty] of [['cc',a=>a.type==='cc','cc'],['bnpl',a=>a.type==='bnpl','bnpl'],['loans',a=>a.type==='loan','loan']]){
    const gl=list.filter(f);
    const tot=gl.reduce((s,a)=>s+shown(a,b),0);
    h+=sec(T().grp[g],gl.length?`<span>${RM(tot)}</span>`:link('+ '+t('add'),'newAcc',ty));
    if(gl.length)h+=`<div class="card list">${gl.map(a=>accRow(a,b)).join('')}</div>`;
    else if(g==='bnpl')h+=`<div class="card"><p class="small" style="margin:0">${t('bnplHint')}</p></div>`;
  }
  h+=`<button class="btn sm ghost block" style="margin-top:10px" data-act="newAcc" data-v="cc">${ic('plus')}${t('addDebt')}</button>`;
  h+=sec(t('manageT'))+`<div class="card list">${T().debtTips.map(([a,c],i)=>`<div class="tip"><span class="n">${i+1}</span><div><b>${a}.</b> ${c}</div></div>`).join('')}</div>`;
  return h;
}
function vBills(){
  const pl=P_();const bills=pl.bills.slice().sort((a,b)=>(+a.day||0)-(+b.day||0));
  let h=sec(t('billsTotal',RM(billsMonthly())),link('+ '+t('addBill'),'bill'));
  h+=`<div class="card list">`+(bills.length?bills.map(x=>{const paid=billPaid(x),due=billDueThisMonth(x);const a=accById(x.acc);
    return `<div class="row">${catAv(x.cat||'bills')}<div class="mid tap" data-act="bill" data-v="${x.id}"><div class="t1">${esc(x.name)}</div><div class="t2">${x.freq==='y'?t('yearly')+' · '+T().mon[(+x.month||1)-1]+' ':''}${t('dueOn',x.day||1)}${a?' · '+esc(a.name):''}</div></div><div style="text-align:right"><div class="amt">${RM(x.amt)}</div><div class="acts">${paid?`<span class="pill good">${t('paid')}</span>`:due?`<button class="btn xs ghost" data-act="billPay" data-v="${x.id}">${t('pay')}</button>`:''}</div></div></div>`}).join(''):`<div class="empty">${t('noBills')}</div>`)+`</div>`;
  return h;
}
function vAct(){
  const v=S.actView||'tx';
  const seg=`<div class="seg" style="margin:4px 0 8px"><button data-act="actView" data-v="tx" class="${v==='tx'?'on':''}">${t('actTx')}</button><button data-act="actView" data-v="bills" class="${v==='bills'?'on':''}">${t('actBills')}</button></div>`;
  return seg+(v==='bills'?vBills():vTx());
}
function vSettings(){
  const name=(S.settings.profile||{}).name||'';
  const th=S.settings.theme||'auto';
  const mrow=(icn,label,act,right)=>`<div class="row" data-act="${act}">${icAv(icn)}<div class="mid"><div class="t1">${label}</div></div>${right||''}<span class="chev">${ic('right')}</span></div>`;
  return `<div style="height:6px"></div>
  ${sec(t('setProfile'))}<div class="card list menu"><div class="row" data-act="profile">${icAv('user')}<div class="mid"><div class="t1">${esc(name)||t('nameLbl')}</div><div class="t2">${t('accountsN',accs().length)} · ${t('netWorth')} ${RM0(profile().net)}</div></div><span class="chev">${ic('right')}</span></div></div>
  ${sec(t('sGeneral'))}<div class="card list">
   <div class="row">${icAv('globe')}<div class="mid"><div class="t1">${t('sLang')}</div></div><div class="seg" style="margin:0;width:120px"><button data-act="lang" data-v="en" class="${LANG==='en'?'on':''}">EN</button><button data-act="lang" data-v="ms" class="${LANG==='ms'?'on':''}">BM</button></div></div>
   <div class="row">${icAv('moon')}<div class="mid"><div class="t1">${t('sTheme')}</div></div><div class="seg" style="margin:0;width:170px">${[['auto','thAuto'],['light','thLight'],['dark','thDark']].map(([k,l])=>`<button data-act="theme" data-v="${k}" class="${th===k?'on':''}">${t(l)}</button>`).join('')}</div></div>
  </div><div class="card list menu" style="margin-top:-2px">${mrow('tag',t('sCats'),'cats')}</div>
  ${sec(t('sData'))}<div class="card list menu">${mrow('zap',t('sShortcut'),'shortcut')}${mrow('save',t('sImport'),'importSheet')}${mrow('up',t('sBackup'),'backup',`<span class="small" style="margin-right:4px">${S.settings.lastBackup?dLabel(S.settings.lastBackup):''}</span>`)}${mrow('swap',t('sRestore'),'restore')}</div>
  ${sec(t('sHelpGrp'))}<div class="card list menu">${mrow('help',t('sHelp'),'help')}${mrow('shield',t('sAbout'),'about')}</div>
  <p class="small" style="text-align:center;margin:18px 0">Poket · v5 (iPhone)</p>`;
}

/* ================= Sheets ================= */
let SHEET=null;
function openSheet(html,re){$('#sheetBody').innerHTML='<div class="grab"></div>'+html;$('#sheet').classList.remove('hidden');if(re)SHEET=re}
function closeSheet(){$('#sheet').classList.add('hidden');$('#sheetBody').innerHTML='';SHEET=null}
function accOptions(sel,filter){
  const list=accs().filter(filter||(()=>true));
  let h=`<option value="">${t('pickAcc')}</option>`;
  for(const [g,types] of [[t('grpAssets'),ASSET_T],[t('grpLiab'),LIAB_T]]){const gl=list.filter(a=>types.includes(a.type));if(!gl.length)continue;h+=`<optgroup label="${esc(g)}">`+gl.map(a=>`<option value="${a.id}" ${a.id===sel?'selected':''}>${esc(a.name)}</option>`).join('')+'</optgroup>'}
  return h;
}
let TXD=null;
function openTx(tx,preset){
  if(!accs().length){toast(t('tAddAccFirst'));location.hash='portfolio';return}
  const first=ty=>(accs().find(a=>a.type===ty)||{}).id||'';
  const last=S.settings.lastFrom&&accById(S.settings.lastFrom)?S.settings.lastFrom:(accs().find(a=>LIQUID.includes(a.type)||a.type==='cc')||{}).id;
  TXD=Object.assign({t:'exp',amt:'',from:last,to:'',cat:'',note:'',date:todayStr()},tx?JSON.parse(JSON.stringify(tx)):{});
  TXD._orig=tx||null;
  if(preset==='exp')TXD.t='exp';
  if(preset==='inc'){TXD.t='inc';TXD.to=first('bank')||last}
  if(preset==='trf'){TXD.t='trf';TXD.from=first('bank');TXD.to=''}
  if(preset==='invest'){TXD.t='trf';TXD.to=first('invest');TXD.from=first('bank')}
  if(preset==='withdraw'){TXD.t='trf';TXD.from=first('invest');TXD.to=first('bank')}
  if(preset&&preset.startsWith('pay:')){TXD.t='trf';TXD.to=preset.slice(4);TXD.from=first('bank');const a=accById(TXD.to);if(a&&a.monthly&&a.type!=='cc')TXD.amt=a.monthly}
  drawTx();
}
function readTx(){
  const g=id=>{const e=document.getElementById(id);return e?e.value:undefined};
  ['amt','from','to','note','date'].forEach(k=>{const v=g('tx_'+k);if(v!==undefined)TXD[k]=v});
}
function drawTx(){
  const d=TXD,isEdit=!!d._orig,re=()=>{readTx();drawTx()};
  if(d.t==='adj'){openSheet(`<h3>${t('adjTitle')}</h3><p class="p">${esc((accById(d.from)||{}).name||'')} · ${dLabel(d.date)} · ${(d.amt>=0?'+':'')+RM(d.amt)}</p><p class="small">${t('adjBody')}</p><div class="btns" style="margin-top:12px"><button class="btn danger" data-act="txDel">${t('delete')}</button><button class="btn ghost" data-act="close">${t('close')}</button></div>`,re);return}
  const cats=d.t==='inc'?inCats():exCats();
  const fa=accById(d.from),ta=accById(d.to);
  let note='';
  if(d.t==='trf'){
    if(isLiab(ta))note=`<div class="msg ok">${t('nCC',esc(ta.name))}</div>`;
    else if(ta&&ta.type==='invest')note=`<div class="msg ok">${t('nInv')}</div>`;
    else if(fa&&fa.type==='invest')note=`<div class="msg ok">${t('nOut')}</div>`;
    else note=`<div class="msg ok">${t('nOwn')}</div>`;
  }
  const ccWarn=`<div class="msg warn">${t('ccWarn')}<br><button class="btn xs" data-act="toCcPay">${t('switchCard')}</button></div>`;
  if(d.t==='exp'&&looksLikeCcPay(d.note))note=ccWarn;
  openSheet(`<h3>${isEdit?t('editTx'):t('newTx')}</h3>
  <div class="seg">${[['exp','segExp'],['inc','segInc'],['trf','segTrf']].map(([k,l])=>`<button data-act="txType" data-v="${k}" class="${d.t===k?'on':''}">${t(l)}</button>`).join('')}</div>
  ${d.pending?`<div class="msg warn">${esc(t('unknownCard',d.card||''))}</div>`:''}
  <div class="f"><input id="tx_amt" class="amtin" inputmode="decimal" placeholder="RM0.00" value="${d.amt===''?'':esc(d.amt)}"></div>
  ${d.t==='exp'?`<div class="f"><label>${t('payWith')}</label><select id="tx_from">${accOptions(d.from,a=>LIQUID.includes(a.type)||a.type==='cc'||a.type==='bnpl')}</select></div>`:''}
  ${d.t==='inc'?`<div class="f"><label>${t('depositTo')}</label><select id="tx_to">${accOptions(d.to,a=>!isLiab(a))}</select></div>`:''}
  ${d.t==='trf'?`<div class="inline"><div class="f"><label>${t('from')}</label><select id="tx_from" data-redraw="1">${accOptions(d.from,a=>!isLiab(a)||a.type==='cc')}</select></div></div><div class="f"><label>${t('toLbl')}</label><select id="tx_to" data-redraw="1">${accOptions(d.to)}</select></div>`:''}
  <div id="tx_warn">${note}</div>
  <div class="f"><label>${d.t==='trf'?t('noteOpt'):t('merchant')}</label><input id="tx_note" placeholder="${esc(d.t==='inc'?t('phInc'):d.t==='exp'?t('phExp'):'')}" value="${esc(d.note)}"></div>
  ${d.t!=='trf'?`<div class="f"><label>${t('category')}</label><div class="wrapchips">${cats.map(c=>`<button class="chip ${d.cat===c?'on':''}" data-act="txCat" data-v="${esc(c)}">${esc(catLabel(c))}</button>`).join('')}</div></div>`:''}
  <div class="f"><label>${t('date')}</label><input id="tx_date" type="date" value="${esc(d.date)}"></div>
  <div class="btns" style="margin-top:4px"><button class="btn" style="flex:1" data-act="txSave">${t('save')}</button>${isEdit?`<button class="btn danger" data-act="txDel">${t('delete')}</button>`:''}</div>`,re);
  const ni=$('#tx_note');
  ni&&ni.addEventListener('input',()=>{
    TXD.note=ni.value;
    if(TXD.t==='exp'){const w=$('#tx_warn');if(w)w.innerHTML=looksLikeCcPay(TXD.note)?ccWarn:''}
    if(TXD.t!=='trf'&&(!TXD.cat||TXD._autoCat)){const g=guessCat(TXD.note,TXD.t);if(g&&g!==TXD.cat){TXD.cat=g;TXD._autoCat=true;document.querySelectorAll('[data-act="txCat"]').forEach(c=>c.classList.toggle('on',c.dataset.v===g))}}
  });
  document.querySelectorAll('[data-redraw]').forEach(s=>s.addEventListener('change',re));
}
function saveTxFromSheet(){
  readTx();const d=TXD;const amt=r2(num(d.amt));
  if(!(amt>0))return toast(t('tEnterAmt'));
  if(d.t==='exp'&&!d.from)return toast(t('tPickAcc'));
  if(d.t==='inc'&&!d.to)return toast(t('tPickAcc'));
  if(d.t==='trf'&&(!d.from||!d.to))return toast(t('tPickBoth'));
  if(d.t==='trf'&&d.from===d.to)return toast(t('tSame'));
  if(!/^\d{4}-\d{2}-\d{2}$/.test(d.date||''))d.date=todayStr();
  const tx={id:d.id||nid(),t:d.t,amt,date:d.date,note:(d.note||'').trim(),ts:d.ts||new Date().toISOString(),src:d.src||'manual'};
  if(d.t==='exp'){tx.from=d.from;tx.cat=d.cat||guessCat(tx.note,'exp')||'other'}
  if(d.t==='inc'){tx.to=d.to;tx.cat=d.cat||guessCat(tx.note,'inc')||'otherIn'}
  if(d.t==='trf'){tx.from=d.from;tx.to=d.to}
  if(d.card)tx.card=d.card;if(d.h)tx.h=d.h;
  putTx(tx,d._orig);
  let dirty=false;
  if(tx.note&&tx.cat&&d.t!=='trf'){S.settings.rules=Object.assign({},S.settings.rules);if(S.settings.rules[norm(tx.note)]!==tx.cat){S.settings.rules[norm(tx.note)]=tx.cat;dirty=true}}
  if(d.t==='exp'&&S.settings.lastFrom!==tx.from){S.settings.lastFrom=tx.from;dirty=true}
  const accId=tx.from||tx.to;
  if(d.pending&&d.card&&accId){const a=accById(accId);if(a&&!(a.alias||[]).map(norm).includes(norm(d.card))){a.alias=(a.alias||[]).concat([d.card]);saveAccounts()}}
  if(dirty)saveSettings();
  closeSheet();render();toast(d._orig?t('tUpdated'):t('tSaved'));
}

function openAcc(id,type,draft){
  const a=draft||(id?JSON.parse(JSON.stringify(accById(id))):{type:type||'bank',name:'',opening:'',alias:[]});
  const ty=a.type,isNew=!id;
  const hasTx=id&&allTx().some(x=>x.from===id||x.to===id);
  const fld=(idn,label,val,ph,hint,mode)=>`<div class="f"><label>${label}</label><input id="${idn}" inputmode="${mode||'decimal'}" placeholder="${esc(ph||'')}" value="${val==null?'':esc(val)}">${hint?`<div class="hint">${hint}</div>`:''}</div>`;
  openSheet(`<h3>${isNew?t('newAcc'):t('editAcc')}</h3>
  <div class="f"><label>${t('type')}</label><select id="a_type">${[[t('grpAssets'),ASSET_T],[t('grpLiab'),LIAB_T]].map(([g,ts])=>`<optgroup label="${esc(g)}">${ts.map(k=>`<option value="${k}" ${k===ty?'selected':''}>${T().acct[k]}</option>`).join('')}</optgroup>`).join('')}</select></div>
  <div class="f"><label>${t('name')}</label><input id="a_name" placeholder="${esc(T().phName[ty])}" value="${esc(a.name)}"></div>
  ${ty==='invest'?`<div class="f"><label>${t('invKind')}</label><select id="a_kind">${KINDS.map(k=>`<option value="${k}" ${a.kind===k?'selected':''}>${esc(kindLabel(k))}</option>`).join('')}</select></div>`:''}
  ${fld('a_open',T().open[ty],a.opening===''?'':a.opening,'0.00',isNew?t('openHintNew'):t('openHintEdit'))}
  ${ty==='cc'?`<div class="inline">${fld('a_limit',t('limitLbl'),a.limit||'')}${fld('a_due',t('dueLbl'),a.dueDay||'',t('duePh'),'','numeric')}</div>`:''}
  ${ty==='loan'||ty==='bnpl'?`<div class="inline">${fld('a_monthly',t('monthlyLbl'),a.monthly||'')}${fld('a_due',t('dueLbl'),a.dueDay||'',t('duePh'),'','numeric')}</div>${fld('a_orig',t('origLbl'),a.orig||'','',t('origHint'))}`:''}
  ${['bank','ewallet','cc','bnpl'].includes(ty)?`<div class="f"><label>${t('walletLbl')}</label><input id="a_alias" placeholder="${esc(t('walletPh'))}" value="${esc((a.alias||[]).join(', '))}"><div class="hint">${t('walletHint')}</div></div>`:''}
  <div class="btns" style="margin-top:4px"><button class="btn" style="flex:1" data-act="accSave" data-v="${id||''}">${t('save')}</button>
  ${id?(hasTx?`<button class="btn ghost" data-act="accArch" data-v="${id}">${a.archived?t('unarchive'):t('archive')}</button>`:`<button class="btn danger" data-act="accDel" data-v="${id}">${t('delete')}</button>`):''}</div>`,()=>openAcc(id,null,collectAcc(a)));
  $('#a_type').addEventListener('change',e=>{const cur=collectAcc(a);cur.type=e.target.value;openAcc(id,null,cur)});
}
function collectAcc(base){
  const g=id=>{const e=document.getElementById(id);return e?e.value:undefined};
  const a=Object.assign({},base);a.type=g('a_type')||a.type;if(g('a_name')!==undefined)a.name=g('a_name').trim();if(g('a_open')!==undefined)a.opening=g('a_open');
  ['kind','limit','monthly','orig'].forEach(k=>{if(g('a_'+k)!==undefined)a[k]=g('a_'+k)});if(g('a_due')!==undefined)a.dueDay=g('a_due');
  if(g('a_alias')!==undefined)a.alias=g('a_alias').split(',').map(s=>s.trim()).filter(Boolean);
  return a;
}
function saveAcc(id){
  const base=id?accById(id):{};const a=collectAcc(base);
  if(!a.name)return toast(t('tEnterName'));
  a.opening=r2(num(a.opening)||0);
  const keep={cc:['limit','dueDay','alias'],loan:['monthly','dueDay','orig'],bnpl:['monthly','dueDay','orig','alias'],bank:['alias'],ewallet:['alias'],invest:['kind','value','costAtValue','valueDate'],property:['value','costAtValue','valueDate'],vehicle:['value','costAtValue','valueDate'],asset:['value','costAtValue','valueDate']}[a.type]||[];
  ['limit','dueDay','monthly','orig','alias','kind','value','costAtValue','valueDate'].forEach(k=>{if(!keep.includes(k))delete a[k]});
  ['limit','monthly','orig'].forEach(k=>{if(k in a)a[k]=r2(num(a[k])||0)});if('dueDay' in a)a.dueDay=parseInt(a.dueDay)||'';
  if(a.type==='invest'&&!a.kind)a.kind='asb';
  if((a.type==='loan'||a.type==='bnpl')&&!a.orig)a.orig=a.opening;
  if(id){Object.keys(base).forEach(k=>delete base[k]);Object.assign(base,a)}else{a.id=nid();a.created=todayStr();a.lastCheck=todayStr();S.accounts.push(a)}
  saveAccounts();closeSheet();render();toast(t('tAccSaved'));
}
function openCheck(id){
  const a=accById(id),b=computeBalances(),cur=shown(a,b),l=isLiab(a);
  openSheet(`<h3>${esc(t('checkT',a.name))}</h3><p class="p small">${t('checkB',l)}</p>
  <div class="kv two" style="margin-bottom:4px"><div><div class="l">${t('inPoket')}</div><div class="v">${RM(cur)}</div></div><div><div class="l">${l?t('actualDebt'):t('actualBal')}</div><div class="v" id="ck_show">—</div></div></div>
  <div class="f"><input id="ck_real" class="amtin" inputmode="decimal" placeholder="RM0.00"></div><div id="ck_res"></div>`,()=>openCheck(id));
  const inp=$('#ck_real');
  inp.addEventListener('input',()=>{
    const real=num(inp.value),res=$('#ck_res');$('#ck_show').textContent=isFinite(real)?RM(real):'—';
    if(!isFinite(real)){res.innerHTML='';return}
    const diff=r2(real-cur);
    if(Math.abs(diff)<0.005){res.innerHTML=`<div class="msg ok" style="text-align:center">${t('matched')}</div><button class="btn block" data-act="ckOk" data-v="${id}">${t('markChecked')}</button>`;return}
    const missingSpend=l?diff>0:diff<0,mag=Math.abs(diff);
    res.innerHTML=`<div class="diff ${missingSpend?'neg':'pos'}">${missingSpend?'-':'+'}${RM(mag)}</div><p class="small" style="text-align:center;margin:0 0 10px">${missingSpend?t('missingSpend'):t('missingInc')} ${t('tryRecall')}</p>
    <div class="btns" style="flex-direction:column"><button class="btn block" data-act="ckFix" data-v="${id}|${missingSpend?'exp':'inc'}|${mag}">${missingSpend?t('recExp'):t('recInc')}</button><button class="btn ghost block" data-act="ckFix" data-v="${id}|adj|${l?-diff:diff}">${t('adjOnly')}</button></div><p class="small" style="margin-top:8px">${t('adjHint')}</p>`;
  });
}
function doCheckFix(v){
  const [id,kind,amtS]=v.split('|');const amt=r2(+amtS),a=accById(id),now=new Date().toISOString();
  if(kind==='adj')putTx({id:nid(),t:'adj',from:id,amt,date:todayStr(),note:t('noteAdj'),ts:now,src:'check'});
  else if(kind==='exp')putTx({id:nid(),t:'exp',from:id,amt,cat:'other',date:todayStr(),note:t('noteMissExp'),ts:now,src:'check'});
  else putTx({id:nid(),t:'inc',to:id,amt,cat:'otherIn',date:todayStr(),note:t('noteMissInc'),ts:now,src:'check'});
  a.lastCheck=todayStr();saveAccounts();closeSheet();render();toast(t('tMatched',a.name));
}
function openVal(id){
  const a=accById(id),b=computeBalances(),v=valueOf(a,b);
  openSheet(`<h3>${esc(t('valT',a.name))}</h3><p class="p small">${t('valB',RM(b[id]))}</p><div class="f"><input id="v_val" class="amtin" inputmode="decimal" placeholder="${RM(v)}"></div><button class="btn block" data-act="valSave" data-v="${id}">${t('saveVal')}</button>`,()=>openVal(id));
}
function openBudget(cat){
  const pl=P_();let sel=cat||'';
  const draw=()=>{openSheet(`<h3>${t('budgetT')}</h3><div class="f"><label>${t('category')}</label><div class="wrapchips">${exCats().map(c=>`<button class="chip ${sel===c?'on':''}" data-act="budCat" data-v="${esc(c)}">${esc(catLabel(c))}${pl.budgets[c]?' · '+RM0(pl.budgets[c]):''}</button>`).join('')}</div></div><div class="f"><label>${t('budgetAmt')}</label><input id="bud_amt" inputmode="decimal" placeholder="0" value="${sel&&pl.budgets[sel]?pl.budgets[sel]:''}"><div class="hint">${t('budgetHint')}</div></div><button class="btn block" data-act="budSave">${t('save')}</button>`,()=>draw())};
  ACT.budCat=v=>{sel=v;draw()};ACT.budSave=()=>{if(!sel)return toast(t('category'));const v=r2(num($('#bud_amt').value)||0);if(v>0)pl.budgets[sel]=v;else delete pl.budgets[sel];savePlan();closeSheet();render();toast(t('tSaved'))};
  draw();
}
function openBill(id,preset){
  const pl=P_();const ex=id?pl.bills.find(x=>x.id===id):null;
  const d=ex?Object.assign({},ex):Object.assign({name:'',amt:'',day:new Date().getDate(),freq:'m',month:new Date().getMonth()+1,cat:'bills',acc:(accs().find(a=>a.type==='bank')||{}).id||''},preset||{});
  const read=()=>{const g=k=>{const e=document.getElementById('b_'+k);return e?e.value:d[k]};['name','amt','day','freq','month','acc'].forEach(k=>d[k]=g(k))};
  const draw=()=>{openSheet(`<h3>${t('billT')}</h3>
   <div class="f"><label>${t('billName')}</label><input id="b_name" placeholder="${esc(t('billNamePh'))}" value="${esc(d.name)}"></div>
   <div class="inline"><div class="f"><label>${t('billAmt')}</label><input id="b_amt" inputmode="decimal" value="${esc(d.amt)}"></div><div class="f"><label>${t('billDay')}</label><input id="b_day" inputmode="numeric" value="${esc(d.day)}"></div></div>
   <div class="inline"><div class="f"><label>${t('billFreq')}</label><select id="b_freq" data-r="1"><option value="m" ${d.freq!=='y'?'selected':''}>${t('everyMonth')}</option><option value="y" ${d.freq==='y'?'selected':''}>${t('yearly')}</option></select></div>${d.freq==='y'?`<div class="f"><label>&nbsp;</label><select id="b_month">${T().monF.map((m,i)=>`<option value="${i+1}" ${+d.month===i+1?'selected':''}>${m}</option>`).join('')}</select></div>`:''}</div>
   <div class="f"><label>${t('billAcc')}</label><select id="b_acc">${accOptions(d.acc,a=>LIQUID.includes(a.type)||a.type==='cc'||a.type==='bnpl')}</select></div>
   <div class="f"><label>${t('category')}</label><div class="wrapchips">${exCats().map(c=>`<button class="chip ${d.cat===c?'on':''}" data-act="billCat" data-v="${esc(c)}">${esc(catLabel(c))}</button>`).join('')}</div></div>
   <div class="btns"><button class="btn" style="flex:1" data-act="billSave">${t('save')}</button>${ex?`<button class="btn danger" data-act="billDel">${t('delete')}</button>`:''}</div>`,()=>{read();draw()});
   $('#b_freq').addEventListener('change',()=>{read();draw()})};
  ACT.billCat=v=>{read();d.cat=v;draw()};
  ACT.billSave=()=>{read();if(!d.name.trim())return toast(t('tEnterName'));const amt=r2(num(d.amt));if(!(amt>0))return toast(t('tEnterAmt'));
    const o={id:ex?ex.id:nid(),name:d.name.trim(),amt,day:Math.min(31,Math.max(1,parseInt(d.day)||1)),freq:d.freq==='y'?'y':'m',cat:d.cat,acc:d.acc};if(o.freq==='y')o.month=+d.month||1;if(ex&&ex.lastPaid)o.lastPaid=ex.lastPaid;
    pl.bills=pl.bills.filter(x=>x.id!==o.id).concat([o]);savePlan();closeSheet();render();toast(t('tSaved'))};
  ACT.billDel=(v,el)=>{if(!el.dataset.sure){el.dataset.sure='1';el.textContent=t('tSure');return}pl.bills=pl.bills.filter(x=>x.id!==id);savePlan();closeSheet();render()};
  draw();
}
function payBill(id){
  const pl=P_(),x=pl.bills.find(y=>y.id===id);if(!x)return;
  const ck=curMonth();
  openTx({t:'exp',amt:x.amt,from:x.acc||'',cat:x.cat||'bills',note:x.name,date:todayStr()});
  TXD._orig=null;TXD._bill=id;drawTx();
}
function openGoal(id){
  const pl=P_();const ex=id?pl.goals.find(x=>x.id===id):null;
  const d=ex?Object.assign({},ex):{name:'',target:'',by:'',acc:'',saved:0};
  openSheet(`<h3>${t('goalT')}</h3>
  <div class="f"><label>${t('goalName')}</label><input id="g_name" placeholder="${esc(t('goalNamePh'))}" value="${esc(d.name)}"></div>
  <div class="inline"><div class="f"><label>${t('goalTarget')}</label><input id="g_target" inputmode="decimal" value="${esc(d.target)}"></div><div class="f"><label>${t('goalBy')}</label><input id="g_by" type="month" value="${esc(d.by||'')}"></div></div>
  <div class="f"><label>${t('goalLink')}</label><select id="g_acc"><option value="">${t('noLink')}</option>${accs().filter(a=>!isLiab(a)).map(a=>`<option value="${a.id}" ${d.acc===a.id?'selected':''}>${esc(a.name)}</option>`).join('')}</select><div class="hint">${t('goalLinkHint')}</div></div>
  <div class="f"><label>${t('goalSaved')}</label><input id="g_saved" inputmode="decimal" value="${esc(d.saved||'')}"></div>
  <div class="btns"><button class="btn" style="flex:1" data-act="goalSave">${t('save')}</button>${ex?`<button class="btn danger" data-act="goalDel">${t('delete')}</button>`:''}</div>`,()=>openGoal(id));
  ACT.goalSave=()=>{const name=$('#g_name').value.trim();if(!name)return toast(t('tEnterName'));const target=r2(num($('#g_target').value));if(!(target>0))return toast(t('tEnterAmt'));
    const o={id:ex?ex.id:nid(),name,target,by:$('#g_by').value||'',acc:$('#g_acc').value||'',saved:r2(num($('#g_saved').value)||0)};
    pl.goals=pl.goals.filter(x=>x.id!==o.id).concat([o]);savePlan();closeSheet();render();toast(t('tSaved'))};
  ACT.goalDel=(v,el)=>{if(!el.dataset.sure){el.dataset.sure='1';el.textContent=t('tSure');return}pl.goals=pl.goals.filter(x=>x.id!==id);savePlan();closeSheet();render()};
}
function openGoalAdd(id){
  const pl=P_(),g=pl.goals.find(x=>x.id===id);
  openSheet(`<h3>${esc(t('addMoneyT',g.name))}</h3><div class="f"><input id="ga_amt" class="amtin" inputmode="decimal" placeholder="RM0.00"></div><button class="btn block" data-act="goalAddSave" data-v="${id}">${t('save')}</button>`,()=>openGoalAdd(id));
}
function sheetShortcut(){
  const tpl='Poket|[Current Date]|[Amount]|[Merchant]|[Card or Pass]';
  const sc=T().sc;
  openSheet(`<h3>${t('sShortcut')}</h3><p class="p small">${t('scIntro')}</p><ol class="steps">${sc.map((s,i)=>`<li>${s}${i===2?`<span class="code">${esc(tpl)}</span>${t('sc3b')}`:''}</li>`).join('')}</ol><button class="btn sm ghost" data-act="copy" data-v="${esc(tpl)}">${t('copyFormat')}</button><div class="msg warn" style="margin-top:12px">${t('scWarn')}</div><button class="btn block" data-act="close">${t('done')}</button>`,sheetShortcut);
}
function sheetImport(){
  openSheet(`<h3>${t('sImport')}</h3><p class="p small">${t('impBody')}</p><input type="file" id="impFile" accept=".txt,text/plain" style="display:none"><div class="btns"><button class="btn" style="flex:1" data-act="pickFile">${t('pickFile')}</button><button class="btn ghost" data-act="pasteImport">${t('paste')}</button></div><p class="small" style="margin-top:10px"><span class="lnk" data-act="shortcut" style="color:var(--ink);font-weight:600">${t('sShortcut')} →</span></p>`,sheetImport);
}
function sheetHelp(){
  openSheet(`<h3>${t('sHelp')}</h3><div>${T().helpSteps.map(([a,b],i)=>`<div class="tip"><span class="n">${i+1}</span><div><b>${a}.</b> ${b}</div></div>`).join('')}</div><button class="btn block" style="margin-top:10px" data-act="close">${t('done')}</button>`,sheetHelp);
}
function sheetCats(){
  const chipList=(list,k)=>list.map(c=>`<button class="chip" data-act="rmCat" data-v="${k}|${esc(c)}"><span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:${catCol(c)};margin-right:6px;vertical-align:1px"></span>${esc(catLabel(c))} ×</button>`).join('');
  openSheet(`<h3>${t('sCats')}</h3><div class="f"><label>${t('catsExp')}</label><div class="wrapchips">${chipList(exCats(),'exp')}<button class="chip" data-act="addCat" data-v="exp">+ ${t('addCat')}</button></div></div><div class="f"><label>${t('catsInc')}</label><div class="wrapchips">${chipList(inCats(),'inc')}<button class="chip" data-act="addCat" data-v="inc">+ ${t('addCat')}</button></div></div><button class="btn block" data-act="close">${t('done')}</button>`,sheetCats);
}

/* ================= Import ================= */
function importText(text){
  const lines=String(text||'').split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
  const seen=new Set(S.settings.imported||[]);
  let added=0,dup=0,unk=0,bad=0;const newH=[];const touched=new Set();
  for(const line of lines){
    const p=line.split('|').map(s=>s.trim());
    if(!['poket','kocek'].includes(norm(p[0]))){bad++;continue}
    const h=hash(norm(line));if(seen.has(h)){dup++;continue}
    const amt=r2(Math.abs(num(p[2])));if(!(amt>0)){bad++;continue}
    let dt=new Date(p[1]);if(isNaN(dt))dt=new Date();
    const merchant=p[3]||'',card=p[4]||'',isInc=/^(in|masuk|inc|income)$/i.test(p[5]||'');
    const a=matchAcc(card);
    const tx={id:nid(),t:isInc?'inc':'exp',amt,date:dStr(dt),note:merchant,cat:guessCat(merchant,isInc?'inc':'exp')||(isInc?'otherIn':'other'),ts:dt.toISOString(),src:'shortcut',card,h};
    if(isInc)tx.to=a?a.id:'';else tx.from=a?a.id:'';
    if(!a){tx.pending=true;unk++}else tx.rev=true;
    const k=mKey(tx.date);S.months[k]=(S.months[k]||[]).concat([tx]);touched.add(k);
    seen.add(h);newH.push(h);added++;
  }
  if(newH.length){S.settings.imported=(S.settings.imported||[]).concat(newH).slice(-4000);saveSettings()}
  touched.forEach(saveMonth);
  closeSheet();
  if(added){S.txFilter='review';location.hash='activity'}
  render();
  openSheet(`<h3>${t('impDone')}</h3><div class="kv two" style="margin-bottom:10px"><div><div class="l">${t('impNew')}</div><div class="v pos">${added}</div></div><div><div class="l">${t('impDup')}</div><div class="v">${dup}</div></div></div>${unk?`<div class="msg warn">${t('impUnk',unk)}</div>`:''}${bad?`<p class="small">${t('impBad',bad)}</p>`:''}<button class="btn block" data-act="close">${t('ok')}</button>`);
}

/* ================= Actions ================= */
function setLang(v){if(!L[v]||v===LANG)return;LANG=v;try{localStorage.setItem('poket.lang',v)}catch(e){}if(S.settings.lang!==v){S.settings.lang=v;saveSettings()}render();if(SHEET&&!$('#sheet').classList.contains('hidden'))SHEET()}
const ACT={
  tab:v=>{if(v!=='activity'&&S.txFilter==='review')S.txFilter='all';if(location.hash.slice(1)===v)window.scrollTo(0,0);location.hash=v},
  lang:setLang,
  theme:v=>{S.settings.theme=v;saveSettings();render()},
  expand:v=>{S.expand[v]=!S.expand[v];render()},
  actView:v=>{S.actView=v;render()},
  settings:()=>{location.hash='settings'},
  close:closeSheet,
  add:()=>openTx(),
  addType:v=>openTx(null,v),
  payCard:v=>openTx(null,'pay:'+v),
  goReview:()=>{S.txFilter='review';location.hash='activity';render()},
  month:v=>{const [y,m]=S.viewMonth.split('-').map(Number);const d=new Date(y,m-1+(+v),1);S.viewMonth=d.getFullYear()+'-'+pad(d.getMonth()+1);render()},
  filter:v=>{S.txFilter=v;render()},
  editTx:v=>{const x=allTx().find(y=>y.id===v);x&&openTx(x)},
  txType:v=>{readTx();if(TXD.t!==v){TXD.t=v;TXD.cat='';TXD._autoCat=false;if(v==='inc'&&!TXD.to)TXD.to=TXD.from;if(v==='exp'&&!TXD.from)TXD.from=TXD.to}drawTx()},
  txCat:v=>{readTx();TXD.cat=v;TXD._autoCat=false;drawTx()},
  toCcPay:()=>{readTx();TXD.t='trf';TXD.to=(accs().find(a=>a.type==='cc')||{}).id||'';const fa=accById(TXD.from);if(!fa||isLiab(fa))TXD.from=(accs().find(a=>a.type==='bank')||{}).id||'';drawTx()},
  txSave:()=>{const bill=TXD&&TXD._bill;saveTxFromSheet();if(bill&&$('#sheet').classList.contains('hidden')){const x=P_().bills.find(y=>y.id===bill);if(x){x.lastPaid=curMonth();savePlan();render()}}},
  txDel:(v,el)=>{if(el.dataset.sure){delTx(TXD._orig);closeSheet();render();toast(t('tDeleted'))}else{el.dataset.sure='1';el.textContent=t('tapAgain')}},
  acc:v=>openAcc(v),
  newAcc:v=>openAcc(null,v||'bank'),
  accSave:v=>saveAcc(v||null),
  accArch:v=>{const a=accById(v);a.archived=!a.archived;saveAccounts();closeSheet();render()},
  accDel:(v,el)=>{if(el.dataset.sure){S.accounts=S.accounts.filter(a=>a.id!==v);saveAccounts();closeSheet();render();toast(t('tAccDeleted'))}else{el.dataset.sure='1';el.textContent=t('tSure')}},
  check:v=>openCheck(v),
  ckOk:v=>{const a=accById(v);a.lastCheck=todayStr();saveAccounts();closeSheet();render();toast(t('tMatched',a.name))},
  ckFix:doCheckFix,
  val:v=>openVal(v),
  valSave:v=>{const val=num($('#v_val').value);if(!isFinite(val))return toast(t('tEnterVal'));const a=accById(v),b=computeBalances();a.value=r2(val);a.costAtValue=b[v];a.valueDate=todayStr();saveAccounts();closeSheet();render();toast(t('tValUpd'))},
  budget:v=>openBudget(v),
  bill:v=>openBill(v),
  billPay:v=>payBill(v),
  goal:v=>openGoal(v),
  goalAdd:v=>openGoalAdd(v),
  goalAddSave:v=>{const g=P_().goals.find(x=>x.id===v);const a=r2(num($('#ga_amt').value));if(!(a>0))return toast(t('tEnterAmt'));g.saved=r2((+g.saved||0)+a);savePlan();closeSheet();render();toast(t('tSaved'))},
  profile:()=>openSheet(`<h3>${t('setProfile')}</h3><div class="f"><label>${t('nameLbl')}</label><input id="p_name" placeholder="${esc(t('namePh'))}" value="${esc((S.settings.profile||{}).name||'')}"></div><button class="btn block" data-act="profileSave">${t('save')}</button>`,ACT.profile),
  profileSave:()=>{S.settings.profile=Object.assign({},S.settings.profile,{name:$('#p_name').value.trim()});saveSettings();closeSheet();render();toast(t('tSaved'))},
  cats:sheetCats,shortcut:sheetShortcut,importSheet:sheetImport,help:sheetHelp,
  about:()=>openSheet(`<h3>${t('sAbout')}</h3><p class="p">${t('aboutB')}</p><button class="btn block" data-act="close">${t('done')}</button>`,ACT.about),
  copy:async v=>{try{await navigator.clipboard.writeText(v);toast(t('tCopied'))}catch(e){openSheet(`<h3>${t('manualCopy')}</h3><div class="f"><textarea rows="3">${esc(v)}</textarea></div>`)}},
  pickFile:()=>{const f=$('#impFile');f.value='';f.onchange=async()=>{const file=f.files[0];if(!file)return;importText(await file.text())};f.click()},
  pasteImport:()=>openSheet(`<h3>${t('pasteT')}</h3><div class="f"><textarea id="pasteBox" rows="7" placeholder="Poket|2026-11-13T20:40:00+08:00|RM12.50|Starbucks|Maybank Visa"></textarea></div><button class="btn block" data-act="doPaste">${t('import')}</button>`,ACT.pasteImport),
  doPaste:()=>importText($('#pasteBox').value),
  rmCat:(v,el)=>{const i=v.indexOf('|'),k=v.slice(0,i),c=v.slice(i+1);if(!el.dataset.sure){el.dataset.sure='1';el.textContent=t('remove')+' '+catLabel(c)+'?';return}const key=k==='exp'?'expCats':'incCats';S.settings[key]=(k==='exp'?exCats():inCats()).filter(x=>x!==c);saveSettings();sheetCats()},
  addCat:v=>openSheet(`<h3>${t('newCatT',v)}</h3><div class="f"><input id="newCat" placeholder="${esc(t('newCatPh'))}"></div><button class="btn block" data-act="saveCat" data-v="${v}">${t('addCat')}</button>`,()=>ACT.addCat(v)),
  saveCat:v=>{const c=$('#newCat').value.trim();if(!c)return;const key=v==='exp'?'expCats':'incCats';const list=(v==='exp'?exCats():inCats()).slice();if(!list.includes(c))list.splice(Math.max(0,list.length-1),0,c);S.settings[key]=list;saveSettings();sheetCats()},
  backup:async()=>{const data=JSON.stringify({poket:1,at:new Date().toISOString(),accounts:S.accounts,settings:S.settings,plan:S.plan,months:S.months});
    const name='poket-backup-'+todayStr()+'.json';
    try{const file=new File([data],name,{type:'application/json'});if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],title:name});S.settings.lastBackup=todayStr();saveSettings();render();return}}catch(e){if(e&&e.name==='AbortError')return}
    try{const url=URL.createObjectURL(new Blob([data],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),4000);S.settings.lastBackup=todayStr();saveSettings();render();toast(t('tSaved'))}
    catch(e){try{await navigator.clipboard.writeText(data);toast(t('tBackup'))}catch(_){openSheet(`<h3>${t('manualCopy')}</h3><div class="f"><textarea rows="8">${esc(data)}</textarea></div>`)}}},
  restore:()=>openSheet(`<h3>${t('sRestore')}</h3><p class="p small">${t('restoreB')}</p><input type="file" id="rsFile" accept=".json,application/json,text/plain" style="display:none"><button class="btn ghost block" style="margin-bottom:10px" data-act="rsPick">${t('rsPick')}</button><div class="f"><textarea id="rsBox" rows="6" placeholder='{"poket":1,...}'></textarea></div><button class="btn danger block" data-act="doRestore">${t('sRestore')}</button>`,ACT.restore),
  rsPick:()=>{const f=$('#rsFile');f.value='';f.onchange=async()=>{const file=f.files[0];if(!file)return;$('#rsBox').value=await file.text();toast(t('rsLoaded'))};f.click()},
  doRestore:(v,el)=>{let d;try{d=JSON.parse($('#rsBox').value)}catch(e){return toast(t('tBadBackup'))}if(!d||!(d.poket||d.kocek))return toast(t('tNotBackup'));if(!el.dataset.sure){el.dataset.sure='1';el.textContent=t('restoreSure');return}
    const old=Object.keys(S.months);old.forEach(k=>{try{localStorage.removeItem(PFX+'m-'+k)}catch(e){}});S.accounts=d.accounts||[];S.settings=d.settings||{};S.plan=d.plan||{};S.months=d.months||{};migrate();
    saveAccounts();saveSettings();savePlan();new Set([...old,...Object.keys(S.months)]).forEach(saveMonth);closeSheet();render();toast(t('tRestored'))},
};
document.addEventListener('click',e=>{const el=e.target.closest('[data-act]');if(!el)return;const f=ACT[el.dataset.act];if(f){e.preventDefault();f(el.dataset.v,el,e)}});
document.addEventListener('input',e=>{if(e.target.id==='txq'){S.txQuery=e.target.value;const pos=e.target.selectionStart;render();const i=$('#txq');if(i){i.focus();try{i.setSelectionRange(pos,pos)}catch(_){}}}});
window.addEventListener('hashchange',()=>{window.scrollTo(0,0);render()});

/* ================= Boot ================= */
const OLD_ROUTES={plan:'goals',summary:'home',ringkasan:'home',transaksi:'activity',akaun:'portfolio',accounts:'portfolio',invest:'portfolio',pelaburan:'portfolio',more:'settings',lagi:'settings'};
function migrate(){
  const mc=c=>LEG_CAT[c]||c;
  if(S.settings.expCats)S.settings.expCats=S.settings.expCats.map(mc);
  if(S.settings.incCats)S.settings.incCats=S.settings.incCats.map(c=>c==='Lain-lain'?'otherIn':mc(c));
  if(S.settings.rules){const r={};for(const k in S.settings.rules)r[k]=mc(S.settings.rules[k]);S.settings.rules=r}
  S.accounts.forEach(a=>{if(a.kind&&LEG_KIND[a.kind])a.kind=LEG_KIND[a.kind]});
  for(const k in S.months)S.months[k].forEach(x=>{if(x.cat){x.cat=(x.t==='inc'&&x.cat==='Lain-lain')?'otherIn':mc(x.cat)}});
}
function applySnap(snap){
  const months={};let accounts=[],settings={},plan={};
  snap.docs.forEach(d=>{const x=d.data()||{};
    if(d.id==='accounts')accounts=JSON.parse(JSON.stringify(x.list||[]));
    else if(d.id==='settings')settings=JSON.parse(JSON.stringify(x));
    else if(d.id==='plan')plan=JSON.parse(JSON.stringify(x));
    else if(d.id.startsWith('m-'))months[d.id.slice(2)]=JSON.parse(JSON.stringify(x.items||[]))});
  S.accounts=accounts;S.settings=settings;S.plan=plan;S.months=months;migrate();
  if(settings.lang&&L[settings.lang]&&settings.lang!==LANG){LANG=settings.lang;try{localStorage.setItem('poket.lang',LANG)}catch(e){}}
}
function loadLocal(){
  const docs=[];
  for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(!k||!k.startsWith(PFX))continue;try{const v=JSON.parse(localStorage.getItem(k));docs.push({id:k.slice(PFX.length),data:()=>v})}catch(e){}}
  applySnap({docs});
}
async function boot(){
  const h=(location.hash||'').slice(1);if(OLD_ROUTES[h])location.hash=OLD_ROUTES[h];
  try{loadLocal();S.mode='db'}catch(e){S.mode='error';S.err='storage'}
  S.ready=true;render();
  try{if(navigator.storage&&navigator.storage.persist)navigator.storage.persist()}catch(e){}
  if('serviceWorker' in navigator&&location.protocol==='https:'){navigator.serviceWorker.register('sw.js').catch(()=>{})}
  window.addEventListener('storage',e=>{if(e.key&&e.key.startsWith(PFX)){loadLocal();render()}});
}
// dash.js loads after this file; boot once every script has run.
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
