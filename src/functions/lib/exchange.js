const currencyList = {
    AED:["UAE","Dirham","Dirhams",784,"د.إ.","د.إ.","Fils","Fils",2,2,100],
    AFN:["Afghan","Afghani","Afghani",971,"Af","؋","Pul","Pul",2,2,100],
    ALL:["Albanian","Lek","Lekë",8,"L","L","Qindarka","Qindarka",2,2,100],
    AMD:["Armenian","Dram","Dram",51,"֏","դր","Luma","Luma",2,2,100],
    ANG:["Netherlands Antillean","Guilder","Guilders",532,"ƒ","ƒ","Cent","Cents",2,2,100],
    AOA:["Angolan","Kwanza","Kwanza",973,"Kz","Kz","Centimo","Centimos",2,2,100],
    ARS:["Argentine","Peso","Pesos",32,"AR$","$","Centavo","Centavos",2,2,100],
    AUD:["Australian","Dollar","Dollars",36,"AU$","$","Cent","Cents",2,2,100],
    AWG:["Aruban","Florin","Florin",533,"ƒ","ƒ","Cent","Cents",2,2,100],
    AZN:["Azerbaijani","Manat","Manat",944,"ман","₼","Qapik","Qapik",2,2,100],
    BAM:["Bosnia-Herzegovina","Convertible Mark","Marks",977,"KM","КМ","Fening","Fening",2,2,100],
    BBD:["Barbadian","Dollar","Dollars",52,"BBD$","$","Cent","Cents",2,2,100],
    BDT:["Bangladeshi","Taka","Taka",50,"৳","৳","Poisha","Poisha",2,2,100],
    BGN:["Bulgarian","Lev","Leva",975,"лв.","лв.","Stotinka","Stotinki",2,2,100],
    BHD:["Bahraini","Dinar","Dinars",48,"BD","د.ب.","Fils","Fils",3,3,1000],
    BIF:["Burundian","Franc","Francs",108,"FBu","FBu","Centime","Centimes",0,2,100],
    BMD:["Bermudian","Dollar","Dollars",60,"$","$","Cent","Cents",2,2,100],
    BND:["Brunei","Dollar","Dollars",96,"B$","$","Cent","Cents",2,2,100],
    BOB:["Bolivian","Boliviano","Bolivianos",68,"Bs.","Bs.","Centavo","Centavos",2,2,100],
    BRL:["Brazilian","Real","Reais",986,"R$","R$","Centavo","Centavos",2,2,100],
    BSD:["Bahamian","Dollar","Dollars",44,"$","$","Cent","Cents",2,2,100],
    BTN:["Bhutanese","Ngultrum","Ngultrums",64,"Nu.","Nu.","Chetrum","Chetrums",2,2,100],
    BWP:["Botswana","Pula","Pula",72,"P","P","Thebe","Thebe",2,2,100],
    BYN:["Belarusian","Ruble","Rubles",933,"Br","руб.","Kapiejka","Kapiejka",2,2,100],
    BZD:["Belize","Dollar","Dollars",84,"BZ$","$","Cent","Cents",2,2,100],
    CAD:["Canadian","Dollar","Dollars",124,"CA$","$","Cent","Cents",2,2,100],
    CDF:["Congolese","Franc","Francs",976,"FC","₣","Centime","Centimes",2,2,100],
    CHF:["Swiss","Franc","Francs",756,"Fr.","₣","Centime","Centimes",2,2,100],
    CKD:["Cook Islands","Dollar","Dollars",null,"$","$","Cent","Cents",2,2,100],
    CLP:["Chilean","Peso","Pesos",152,"CL$","$","Centavo","Centavos",0,0,100],
    CNY:["Chinese","Yuan","Yuan",156,"CN¥","¥元","Fen","Fen",2,2,100],
    COP:["Colombian","Peso","Pesos",170,"CO$","$","Centavo","Centavos",2,2,100],
    CRC:["Costa Rican","Colón","Colones",188,"₡","₡","Centimo","Centimos",2,2,100],
    CUC:["Cuban Convertible","Peso","Pesos",931,"CUC$","$","Centavo","Centavos",2,2,100],
    CUP:["Cuban","Peso","Pesos",192,"$MN","₱","Centavo","Centavos",2,2,100],
    CVE:["Cabo Verdean","Escudo","Escudo",132,"CV$","$","Centavo","Centavos",2,2,100],
    CZK:["Czech","Koruna","Koruny",203,"Kč","Kč","Haléř","Haléř",2,2,100],
    DJF:["Djiboutian","Franc","Francs",262,"Fdj","ف.ج.","Centime","Centimes",0,2,100],
    DKK:["Danish","Krone","Kroner",208,"kr.","kr.","Øre","Øre",2,2,100],
    DOP:["Dominican","Peso","Pesos",214,"RD$","$","Centavo","Centavos",2,2,100],
    DZD:["Algerian","Dinar","Dinars",12,"DA","د.ج.","Santeem","Santeems",2,2,100],
    EGP:["Egyptian","Pound","Pounds",818,"E£","ج.م.","Qirsh","Qirsh",2,2,100],
    EHP:["Sahrawi","Peseta","Pesetas",null,"Ptas.","Ptas.","Céntimo","Céntimos",2,2,100],
    ERN:["Eritrean","Nakfa","Nakfa",232,"Nkf","ناكفا","Cent","Cents",2,2,100],
    ETB:["Ethiopian","Birr","Birr",230,"Br","ብር","Santim","Santim",2,2,100],
    EUR:["","Euro","Euros",978,"€","€","Cent","Cents",2,2,100],
    FJD:["Fijian","Dollar","Dollars",242,"FJ$","$","Cent","Cents",2,2,100],
    FKP:["Falkland Islands","Pound","Pounds",238,"FK£","£","Penny","Pence",2,2,100],
    FOK:["Faroese","Króna","Krónas",null,"kr","kr","Oyra","Oyra",2,2,100],
    GBP:["Pound Sterling","Pound","Pounds",826,"£","£","Penny","Pence",2,2,100],
    GEL:["Georgian","Lari","Lari",981,"₾","₾","Tetri","Tetri",2,2,100],
    GGP:["Guernsey","Pound","Pounds",null,"£","£","Penny","Pence",2,2,100],
    GHS:["Ghanaian","Cedi","Cedis",936,"GH₵","₵","Pesewa","Pesewas",2,2,100],
    GIP:["Gibraltar","Pound","Pounds",292,"£","£","Penny","Pence",2,2,100],
    GMD:["Gambian","Dalasi","Dalasis",270,"D","D","Butut","Bututs",2,2,100],
    GNF:["Guinean","Franc","Francs",324,"FG","FG","Centime","Centimes",0,2,100],
    GTQ:["Guatemalan","Quetzal","Quetzales",320,"Q","$","Centavo","Centavos",2,2,100],
    GYD:["Guyanese","Dollar","Dollars",328,"G$","$","Cent","Cents",2,2,100],
    HKD:["Hong Kong","Dollar","Dollars",344,"HK$","$","Cent","Cents",2,2,100],
    HNL:["Honduran","Lempira","Lempiras",340,"L","L","Centavo","Centavos",2,2,100],
    HRK:["Croatian","Kuna","Kuna",191,"kn","kn","Lipa","Lipa",2,2,100],
    HTG:["Haitian","Gourde","Gourdes",332,"G","G","Centime","Centimes",2,2,100],
    HUF:["Hungarian","Forint","Forint",348,"Ft","Ft","fillér","fillér",2,2,100],
    IDR:["Indonesian","Rupiah","Rupiah",360,"Rp","Rp","Sen","Sen",2,2,100],
    ILS:["Israeli","Shekel","Shekels",376,"₪","₪","Agora","Agoras",2,2,100],
    IMP:["Manx","Pound","Pounds",null,"£","£","Penny","Pence",2,2,100],
    INR:["Indian","Rupee","Rupees",356,"Rs.","₹","Paisa","Paise",2,2,100],
    IQD:["Iraqi","Dinar","Dinars",368,"د.ع.","د.ع.","Fils","Fils",3,3,1000],
    IRR:["Iranian","Rial","Rials",364,"﷼","﷼","Dinar","Dinars",2,2,100],
    ISK:["Icelandic","Krona","Krónur",352,"kr","kr","Aurar","Aurar",0,2,100],
    JEP:["Jersey","Pound","Pounds",null,"£","£","Penny","Pence",2,2,100],
    JMD:["Jamaican","Dollar","Dollars",388,"J$","$","Cent","Cents",2,2,100],
    JOD:["Jordanian","Dinar","Dinars",400,"JD","د.أ.","Fils","Fils",3,3,1000],
    JPY:["Japanese","Yen","Yen",392,"¥","¥","Sen","Sen",0,2,100],
    KES:["Kenyan","Shilling","Shillings",404,"KSh","KSh","Cent","Cents",2,2,100],
    KGS:["Kyrgyzstani","Som","Som",417,"с","с","Tyiyn","Tyiyn",2,2,100],
    KHR:["Cambodian","Riel","Riels",116,"៛","៛","Sen","Sen",2,2,100],
    KID:["Kiribati","Dollar","Dollars",null,"$","$","Cent","Cents",2,2,100],
    KMF:["Comorian","Franc","Francs",174,"CF","CF","Centime","Centimes",0,2,100],
    KPW:["North Korean","Won","Won",408,"₩","₩","Chon","Chon",2,2,100],
    KRW:["South Korean","Won","Won",410,"₩","₩","Jeon","Jeon",0,2,100],
    KWD:["Kuwaiti","Dinar","Dinars",414,"KD","د.ك.","Fils","Fils",3,3,1000],
    KYD:["Cayman Islands","Dollar","Dollars",136,"CI$","$","Cent","Cents",2,2,100],
    KZT:["Kazakhstani","Tenge","Tenge",398,"₸","₸","Tıyn","Tıyn",2,2,100],
    LAK:["Lao","Kip","Kip",418,"₭N","₭","Att","Att",2,2,100],
    LBP:["Lebanese","Pound","Pounds",422,"LL.","ل.ل.","Qirsh","Qirsh",2,2,100],
    LKR:["Sri Lankan","Rupee","Rupees",144,"Rs.","රු or ரூ","Cent","Cents",2,2,100],
    LRD:["Liberian","Dollar","Dollars",430,"L$","$","Cent","Cents",2,2,100],
    LSL:["Lesotho","Loti","maLoti",426,"L","L","Sente","Lisente",2,2,100],
    LYD:["Libyan","Dinar","Dinars",434,"LD","ل.د.","Dirham","Dirhams",3,3,1000],
    MAD:["Moroccan","Dirham","Dirhams",504,"DH","د.م.","Centime","Centimes",2,2,100],
    MDL:["Moldovan","Leu","Lei",498,"L","L","Ban","Bani",2,2,100],
    MGA:["Malagasy","Ariary","Ariary",969,"Ar","Ar","Iraimbilanja","Iraimbilanja",2,0,5],
    MKD:["Macedonian","Denar","Denars",807,"den","ден","Deni","Deni",2,2,100],
    MMK:["Myanmar","Kyat","Kyat",104,"Ks","Ks","Pya","Pya",2,2,100],
    MNT:["Mongolian","Tögrög","Tögrög",496,"₮","₮","möngö","möngö",2,2,100],
    MOP:["Macanese","Pataca","Patacas",446,"MOP$","MOP$","Avo","Avos",2,2,100],
    MRU:["Mauritanian","Ouguiya","Ouguiya",929,"UM","أ.م.","Khoums","Khoums",2,0,5],
    MUR:["Mauritian","Rupee","Rupees",480,"Rs.","रु ","Cent","Cents",2,2,100],
    MVR:["Maldivian","Rufiyaa","Rufiyaa",462,"MRf",".ރ","laari","laari",2,2,100],
    MWK:["Malawian","Kwacha","Kwacha",454,"MK","MK","Tambala","Tambala",2,2,100],
    MXN:["Mexican","Peso","Pesos",484,"MX$","$","Centavo","Centavos",2,2,100],
    MYR:["Malaysian","Ringgit","Ringgit",458,"RM","RM","Sen","Sen",2,2,100],
    MZN:["Mozambican","Metical","Meticais",943,"MTn","MT","Centavo","Centavos",2,2,100],
    NAD:["Namibian","Dollar","Dollars",516,"N$","$","Cent","Cents",2,2,100],
    NGN:["Nigerian","Naira","Naira",566,"₦","₦","Kobo","Kobo",2,2,100],
    NIO:["Nicaraguan","Córdoba Oro","Córdoba Oro",558,"C$","C$","Centavo","Centavos",2,2,100],
    NOK:["Norwegian","Krone","Kroner",578,"kr","kr","øre","øre",2,2,100],
    NPR:["Nepalese","Rupee","Rupees",524,"Rs.","रू","Paisa","Paise",2,2,100],
    NZD:["New Zealand","Dollar","Dollars",554,"NZ$","$","Cent","Cents",2,2,100],
    OMR:["Omani","Rial","Rials",512,"OR","ر.ع.","Baisa","Baisa",3,3,1000],
    PAB:["Panamanian","Balboa","Balboa",590,"B/.","B/.","Centésimo","Centésimos",2,2,100],
    PEN:["Peruvian","Sol","Soles",604,"S/.","S/.","Céntimo","Céntimos",2,2,100],
    PGK:["Papua New Guinean","Kina","Kina",598,"K","K","Toea","Toea",2,2,100],
    PHP:["Philippine","Peso","Pesos",608,"₱","₱","Sentimo","Sentimo",2,2,100],
    PKR:["Pakistani","Rupee","Rupees",586,"Rs.","Rs","Paisa","Paise",2,2,100],
    PLN:["Polish","Zloty","Zlotys",985,"zł","zł","Grosz","Groszy",2,2,100],
    PND:["Pitcairn Islands","Dollar","Dollars",null,"$","$","Cent","Cents",2,2,100],
    PRB:["Transnistrian","Ruble","Rubles",null,"р.","р.","Kopek","Kopeks",2,2,100],
    PYG:["Paraguayan","Guaraní","Guaraníes",600,"₲","₲","Centimo","Centimos",0,2,100],
    QAR:["Qatari","Riyal","Riyals",634,"QR","ر.ق.","Dirham","Dirhams",2,2,100],
    RON:["Romanian","Leu","Lei",946,"L","L","Ban","Bani",2,2,100],
    RSD:["Serbian","Dinar","Dinars",941,"din","дин","Para","Para",2,2,100],
    RUB:["Russian","Ruble","Rubles",643,"₽","₽","Kopek","Kopeks",2,2,100],
    RWF:["Rwandan","Franc","Francs",646,"FRw","R₣","Centime","Centimes",0,2,100],
    SAR:["Saudi","Riyal","Riyals",682,"SR","ر.س.","Halalah","Halalahs",2,2,100],
    SBD:["Solomon Islands","Dollar","Dollars",90,"SI$","$","Cent","Cents",2,2,100],
    SCR:["Seychellois","Rupee","Rupees",690,"Rs.","Rs","Cent","Cents",2,2,100],
    SDG:["Sudanese","Pound","Pounds",938,"£SD","ج.س.","Qirsh","Qirsh",2,2,100],
    SEK:["Swedish","Krona","Kronor",752,"kr","kr","Öre","Öre",2,2,100],
    SGD:["Singapore","Dollar","Dollars",702,"S$","$","Cent","Cents",2,2,100],
    SHP:["Saint Helena","Pound","Pounds",654,"£","£","Penny","Pence",2,2,100],
    SLL:["Sierra Leonean","Leone","Leones",694,"Le","Le","Cent","Cents",2,2,100],
    SLS:["Somaliland","Shilling","Shillings",null,"Sl","Sl","Cent","Cents",2,2,100],
    SOS:["Somali","Shilling","Shillings",706,"Sh.So.","Ssh","Senti","Senti",2,2,100],
    SRD:["Surinamese","Dollar","Dollars",968,"Sr$","$","Cent","Cents",2,2,100],
    SSP:["South Sudanese","Pound","Pounds",728,"SS£","SS£","Qirsh","Qirsh",2,2,100],
    STN:["Sao Tome","Dobra","Dobras",930,"Db","Db","Centimo","Centimos",2,2,100],
    SVC:["Salvadoran","Colón","Colones",222,"₡","₡","Centavo","Centavos",2,2,100],
    SYP:["Syrian","Pound","Pounds",760,"LS","ل.س.","Qirsh","Qirsh",2,2,100],
    SZL:["Swazi","Lilangeni","Emalangeni",748,"L","L","Cent","Cents",2,2,100],
    THB:["Thai","Baht","Baht",764,"฿","฿","Satang","Satang",2,2,100],
    TJS:["Tajikistani","Somoni","Somoni",972,"SM","SM","Diram","Diram",2,2,100],
    TMT:["Turkmenistan","Manat","Manat",934,"m.","T","Tenge","Tenge",2,2,100],
    TND:["Tunisian","Dinar","Dinars",788,"DT","د.ت.","Millime","Millime",3,3,1000],
    TOP:["Tongan","Pa'anga","Pa'anga",776,"T$","PT","Seniti","Seniti",2,2,100],
    TRY:["Turkish","Lira","Lira",949,"TL","₺","Kuruş","Kuruş",2,2,100],
    TTD:["Trinidad and Tobago","Dollar","Dollars",780,"TT$","$","Cent","Cents",2,2,100],
    TVD:["Tuvaluan","Dollar","Dollars",null,"$","$","Cent","Cents",2,2,100],
    TWD:["New Taiwan","Dollar","Dollars",901,"NT$","圓","Cent","Cents",2,2,100],
    TZS:["Tanzanian","Shilling","Shillings",834,"TSh","TSh","Senti","Senti",2,2,100],
    UAH:["Ukrainian","Hryvnia","Hryvnias",980,"₴","грн","Kopiyka","kopiyky",2,2,100],
    UGX:["Ugandan","Shilling","Shillings",800,"USh","Sh","Cent","Cents",0,2,100],
    USD:["US","Dollar","Dollars",840,"$","$","Cent","Cents",2,2,100],
    UYU:["Uruguayan","Peso","Pesos",858,"$U","$","Centésimo","Centésimos",2,2,100],
    UZS:["Uzbekistani","Som","Som",860,"сум","сум","Tiyin","Tiyin",2,2,100],
    VED:["Venezuelan","Bolívar Digital","Bolívars Digital",null,"Bs.","Bs.","Céntimo","Céntimos",2,2,100],
    VES:["Venezuelan","Bolívar","Bolívares",928,"Bs.F","Bs.F","Centimo","Centimos",2,2,100],
    VND:["Vietnamese","Dong","Dong",704,"₫","₫","Hào","Hào",0,2,10],
    VUV:["Vanuatu","Vatu","Vatu",548,"VT","VT","","",0,0,null],
    WST:["Samoan","Tala","Tala",882,"T","ST","Sene","Sene",2,2,100],
    XAF:["Central African CFA","Franc","Francs",950,"Fr","Fr.","Centime","Centimes",0,2,100],
    XCD:["East Caribbean","Dollar","Dollars",951,"$","$","Cent","Cents",2,2,100],
    XOF:["West African CFA","Franc","Francs",952,"₣","₣","Centime","Centimes",0,2,100],
    XPF:["CFP","Franc","Francs",953,"₣","₣","Centime","Centimes",0,0,100],
    YER:["Yemeni","Rial","Rials",886,"YR","ر.ي.","Fils","Fils",2,2,100],
    ZAR:["South African","Rand","Rand",710,"R","R","Cent","Cents",2,2,100],
    ZMW:["Zambian","Kwacha","Kwacha",967,"ZK","ZK","Ngwee","Ngwee",2,2,100],
    ZWB:["RTGS","Dollar","Dollars",null,"","","","",0,0,null],
    ZWL:["Zimbabwean","Dollar","Dollars",932,"Z$","$","Cent","Cents",2,2,100],

    // note i have modified these to conform to standard codes if applicable for our api
    ABK:["Abkhazian","Apsar","Apsark",null,"","","","",0,0,null],
    ART:["Artsakh","Dram","Dram",null,"դր.","դր.","Luma","Luma",2,2,100],
}

// the fallowing is my atempt to combind the iso 4217 and 3166 standards into an single file with the adition of the
// uk rule.  this should allow for easy updation as nessasarey ... here.

//tldr only domain is .uk
let codeMapKeys = [
  'country_name',
  'country_numeric_code',
  'country_alpha2_code',
  'country_alpha3_code',
  'currency_name',
  'currency_numeric_code',
  'currency_alpha3_code',
  'currency_exponent',
  'currency_subunit',
  'currency_description',
  'country_tld',
  'country_year_assigned'
]

let codeMap = {"AF":["Afghanistan","4","AF","AFG","Afghani","971","AFN","2","Pul","Afghani",".af","1974"],"AL":["Albania","8","AL","ALB","Albanian Lek","8","ALL","2","Qindarka","Lekë",".al","1974"],"DZ":["Algeria","12","DZ","DZA","Algerian Dinar","12","DZD","2","Santīm","Algerian Dinars",".dz","1974"],"AO":["Angola","24","AO","AGO","Kwanza","973","AOA","2","Cents","Kwansa",".ao","1974"],"AR":["Argentina","32","AR","ARG","Argentine Peso","32","ARS","2","Centavos","Argentine Pesos",".ar","1974"],"AM":["Armenia","51","AM","ARM","Armenian Dram","51","AMD","2","Luma","Armenian Dram",".am","1992"],"AW":["Aruba","533","AW","ABW","Aruban Florin","533","AWG","2","Cents","Aruban Florin",".aw","1986"],"AU":["Australia","36","AU","AUS","Australian Dollar","36","AUD","2","Cents","Australian Dollars",".au","1974"],"AZ":["Azerbaijan","31","AZ","AZE","Azerbaijanian Manat","944","AZN","2","Qəpik","Manats",".az","1992"],"BS":["Bahamas","44","BS","BHS","Bahamian Dollar","44","BSD","2","Cents","Bahamian Dollars",".bs","1974"],"BH":["Bahrain","48","BH","BHR","Bahraini Dinar","48","BHD","3","Fils","Bahraini Dinars",".bh","1974"],"BD":["Bangladesh","50","BD","BGD","Bangladeshi Taka","50","BDT","2","Poishas","Takas",".bd","1974"],"BB":["Barbados","52","BB","BRB","Barbados Dollar","52","BBD","2","Cents","Barbados Dollars",".bb","1974"],"BY":["Belarus","112","BY","BLR","Belarussian Ruble","933","BYR","2","Kapyeyka","Belarussian Rubles",".by","1974"],"BZ":["Belize","84","BZ","BLZ","Belize Dollar","84","BZD","2","Cents","Belize Dollars",".bz","1974"],"BM":["Bermuda","60","BM","BMU","Bermudian Dollar","60","BMD","2","Cents","Bermudan Dollars",".bm","1974"],"BT":["Bhutan","64","BT","BTN","Bhutanese Ngultrum","64","BTN","2","Chetrums","Ngultrums",".bt","1974"],"BA":["Bosnia and Herzegovina","70","BA","BIH","Convertible Mark","977","BAM","2","Fenings","Convert. Marks",".ba","1992"],"BW":["Botswana","72","BW","BWA","Botswana Pula","72","BWP","2","Thebe","Pula",".bw","1974"],"BR":["Brazil","76","BR","BRA","Brazilian Real","986","BRL","2","Centavos","Brazilian Real",".br","1974"],"BN":["Brunei Darussalam","96","BN","BRN","Brunei Dollar","96","BND","2","Cents","Brunei Dollars",".bn","1974"],"BG":["Bulgaria","100","BG","BGR","Bulgarian Lev","975","BGN","2","Stotinka","Lev",".bg","1974"],"BI":["Burundi","108","BI","BDI","Burundi Franc","108","BIF","0","Centimes","Burundi Francs",".bi","1974"],"KH":["Cambodia","116","KH","KHM","Riel","116","KHR","2","Sens","Riels",".kh","1974"],"CA":["Canada","124","CA","CAN","Canadian Dollar","124","CAD","2","Cents","Canadian Dollars",".ca","1974"],"CV":["Cape Verde","132","CV","CPV","Cape Verde Escudo","132","CVE","2","Centavos","Escudos",".cv","1974"],"KY":["Cayman Islands","136","KY","CYM","Cayman Islands Dollar","136","KYD","2","Cents","Cayman Dollars",".ky","1974"],"CL":["Chile","152","CL","CHL","Unidades de Fomento","990","CLF","0","","Unidades de Fomento",".cl","1974"],"CN":["China","156","CN","CHN","Yuan Renminbi","156","CNY","2","Fen","Renminbi",".cn","1974"],"CO":["Colombia","170","CO","COL","Colombian Peso","170","COP","2","Centavos","Colombian Pesos",".co","1974"],"KM":["Comoros","174","KM","COM","Comoro Franc","174","KMF","0","Centimes","Comoro Francs",".km","1974"],"CR":["Costa Rica","188","CR","CRI","Costa Rican Colon","188","CRC","2","Centimos","Costa Rican Colones",".cr","1974"],"HR":["Croatia","191","HR","HRV","Croatian Kuna","191","HRK","2","Lipa","Kuna",".hr","1992"],"CU":["Cuba","192","CU","CUB","Cuban Peso","192","CUP","2","Centavos","Cuban Pesos",".cu","1974"],"CZ":["Czech Republic","203","CZ","CZE","Czech Koruna","203","CZK","2","Haler","Korun",".cz","1993"],"DK":["Denmark","208","DK","DNK","Danish Krone","208","DKK","2","Ore","Danish Kroner",".dk","1974"],"DJ":["Djibouti","262","DJ","DJI","Djibouti Franc","262","DJF","0","Centimes","Djibouti Francs",".dj","1977"],"DO":["Dominican Republic","214","DO","DOM","Dominican Peso","214","DOP","2","Centavos","Dominican Pesos",".do","1974"],"EG":["Egypt","818","EG","EGY","Egyptian Pound","818","EGP","2","Piastre","Egyptian Pounds",".eg","1974"],"SV":["El Salvador","222","SV","SLV","El Salvador Colon","222","SVC","2","Centavos","El Salvador Colones",".sv","1974"],"ET":["Ethiopia","230","ET","ETH","Ethiopian Birr","230","ETB","2","Santim","Birr",".et","1974"],"FK":["Falkland Islands (Malvinas)","238","FK","FLK","Falkland Islands Pound","238","FKP","2","Pence","Falkland Pounds",".fk","1974"],"FJ":["Fiji","242","FJ","FJI","Fiji Dollar","242","FJD","2","Cents","Fiji Dollars",".fj","1974"],"GM":["Gambia","270","GM","GMB","Dalasi","270","GMD","2","Bututs","Dalasi",".gm","1974"],"GE":["Georgia","268","GE","GEO","Lari","981","GEL","2","Tetri","Georgian Lari",".ge","1992"],"GH":["Ghana","288","GH","GHA","Ghana Cedi","936","GHS","2","Pesewa","Cedis",".gh","1974"],"GI":["Gibraltar","292","GI","GIB","Gibraltar Pound","292","GIP","2","Pence","Gibraltar Pounds",".gi","1974"],"GT":["Guatemala","320","GT","GTM","Quetzal","320","GTQ","2","Centavos","Quetzales",".gt","1974"],"GN":["Guinea","324","GN","GIN","Guinea Franc","324","GNF","0","Centimes","Guinean Francs",".gn","1974"],"GY":["Guyana","328","GY","GUY","Guyana Dollar","328","GYD","2","Cents","Guyana Dollars",".gy","1974"],"HT":["Haiti","332","HT","HTI","Gourde","332","HTG","2","Centimes","Gourdes",".ht","1974"],"HN":["Honduras","340","HN","HND","Lempira","340","HNL","2","Centavos","Lempiras",".hn","1974"],"HK":["Hong Kong","344","HK","HKG","Hong Kong Dollar","344","HKD","2","Cents","H.K.Dollars",".hk","1974"],"HU":["Hungary","348","HU","HUN","Forint","348","HUF","2","Filler","Forint",".hu","1974"],"IS":["Iceland","352","IS","ISL","Iceland Krona","352","ISK","2","Eyrir","Iceland Krone",".is","1974"],"IN":["India","356","IN","IND","Indian Rupee","356","INR","2","Paise","Indian Rupees",".in","1974"],"ID":["Indonesia","360","ID","IDN","Rupiah","360","IDR","2","Sen","Rupiah",".id","1974"],"IQ":["Iraq","368","IQ","IRQ","Iraqi Dinar","368","IQD","3","Fils","Iraqi Dinars",".iq","1974"],"IL":["Israel","376","IL","ISR","New Israeli Sheqel","376","ILS","2","Agoras","Shekels",".il","1974"],"JM":["Jamaica","388","JM","JAM","Jamaican Dollar","388","JMD","2","Cents","Jamaican Dollars",".jm","1974"],"JP":["Japan","392","JP","JPN","Yen","392","JPY","0","Sen","Yen",".jp","1974"],"JO":["Jordan","400","JO","JOR","Jordanian Dinar","400","JOD","3","Fils","Jordanian Dinars",".jo","1974"],"KZ":["Kazakhstan","398","KZ","KAZ","Tenge","398","KZT","2","Tiyin","Tenge",".kz","1992"],"KE":["Kenya","404","KE","KEN","Kenyan Shilling","404","KES","2","Cents","Kenyan Shillings",".ke","1974"],"KW":["Kuwait","414","KW","KWT","Kuwaiti Dinar","414","KWD","3","Fils","Kuwaiti Dinars",".kw","1974"],"KG":["Kyrgyzstan","417","KG","KGZ","Kyrgyzstan Soma","417","KGS","2","Tyiyn","Som",".kg","1992"],"LA":["Lao Peoples Democratic Repub","418","LA","LAO","Kip","418","LAK","2","Att","Kip",".la","1974"],"LB":["Lebanon","422","LB","LBN","Lebanese Pound","422","LBP","2","Qirsh","Lebanese Pounds",".lb","1974"],"LS":["Lesotho","426","LS","LSO","Loti","426","LSL","2","Lisente","Maloti",".ls","1974"],"LR":["Liberia","430","LR","LBR","Liberian Dollar","430","LRD","2","Cents","Liberian Dollars",".lr","1974"],"LY":["Libyan Arab Jamahiriya","434","LY","LBY","Libyan Dinar","434","LYD","3","Dirhams","Libyan Dinars",".ly","1974"],"MO":["Macao","446","MO","MAC","Pataca","446","MOP","2","Avos","Patacas",".mo","1974"],"MK":["Macedonia","807","MK","MKD","Denar","807","MKD","2","Deni","Macedonian Denari",".mk","1993"],"MG":["Madagascar","450","MG","MDG","Malagasy Ariary","969","MGA","2","Centimes","Madagasc.Ariary",".mg","1974"],"MW":["Malawi","454","MW","MWI","Kwacha","454","MWK","2","Tambala","Malawi Kwacha",".mw","1974"],"MY":["Malaysia","458","MY","MYS","Malaysian Ringgit","458","MYR","2","Sen","Ringgit",".my","1974"],"MV":["Maldives","462","MV","MDV","Rufiyaa","462","MVR","2","Laari","Rufiyaa",".mv","1974"],"MR":["Mauritania","478","MR","MRT","Ouguiya","929","MRU","2","khoums","Ouguiya",".mr","1974"],"MU":["Mauritius","480","MU","MUS","Mauritius Rupee","480","MUR","2","Cents","Mauritian Rupees",".mu","1974"],"MX":["Mexico","484","MX","MEX","Mexican Peso","484","MXN","2","Centavos","Mexican Pesos",".mx","1974"],"MN":["Mongolia","496","MN","MNG","Tugrik","496","MNT","2","Mongo","Tugrik",".mn","1974"],"MA":["Morocco","504","MA","MAR","Moroccan Dirham","504","MAD","2","Centimes","Moroccan Dirhams",".ma","1974"],"MZ":["Mozambique","508","MZ","MOZ","Mozambique Metical","943","MZN","2","Centavos","Meticais",".mz","1974"],"MM":["Myanmar","104","MM","MMR","Kyat","104","MMK","2","Pyas","Kyats",".mm","1989"],"NA":["Namibia","516","NA","NAM","Namibia Dollar","516","NAD","2","Cents","Namibian Dollars",".na","1974"],"NP":["Nepal","524","NP","NPL","Nepalese Rupee","524","NPR","2","Paise","Nepalese Rupees",".np","1974"],"NZ":["New Zealand","554","NZ","NZL","New Zealand Dollar","554","NZD","2","Cents","N.Zeal.Dollars",".nz","1974"],"NI":["Nicaragua","558","NI","NIC","Cordoba Oro","558","NIO","2","Centavos","Cordobas",".ni","1974"],"NG":["Nigeria","566","NG","NGA","Naira","566","NGN","2","Kobo","Naira",".ng","1974"],"NO":["Norway","578","NO","NOR","Norwegian Krone","578","NOK","2","Ore","Norwegian Kroner",".no","1974"],"OM":["Oman","512","OM","OMN","Rial Omani","512","OMR","3","Baisa","Omani Rials",".om","1974"],"PK":["Pakistan","586","PK","PAK","Pakistan Rupee","586","PKR","2","Paise","Pakistani Rupees",".pk","1974"],"PA":["Panama","591","PA","PAN","Balboa","590","PAB","2","Centesimos","Balboas",".pa","1974"],"PG":["Papua New Guinea","598","PG","PNG","Kina","598","PGK","2","Toea","Kina",".pg","1974"],"PY":["Paraguay","600","PY","PRY","Guarani","600","PYG","0","Centimos","Guaranies",".py","1974"],"PE":["Peru","604","PE","PER","Nuevo Sol","604","PEN","2","Centimos","Sols",".pe","1974"],"PH":["Philippines","608","PH","PHL","Philippine Peso","608","PHP","2","Centavos","Philippine Pesos",".ph","1974"],"PL":["Poland","616","PL","POL","Zloty","985","PLN","2","Grosz","Zloty",".pl","1974"],"QA":["Qatar","634","QA","QAT","Qatari Rial","634","QAR","2","Dirhams","Qatari Rials",".qa","1974"],"SS":["Republic of South Sudan","728","SS","SSD","South Sudanese Pound","728","SSP","2","Piasters","South Sudanese Pounds",".ss","2011"],"RO":["Romania","642","RO","ROU","New Romanian Leu","946","RON","2","Bani","Romanian Lei",".ro","1974"],"RU":["Russian Federation","643","RU","RUS","Russian Ruble","643","RUB","2","Kopeyka","Rubles",".ru","1992"],"RW":["Rwanda","646","RW","RWA","Rwanda Franc","646","RWF","0","Centimes","Rwandan Francs",".rw","1974"],"SH":["Saint Helena","654","SH","SHN","Saint Helena Pound","654","SHP","2","Pence","St.Helena Pounds",".sh","1974"],"WS":["Samoa","882","WS","WSM","Tala","882","WST","2","Sene","Tala",".ws","1974"],"ST":["Sao Tome and Principe","678","ST","STP","Dobra","930","STN","2","Centimos","Dobra",".st","1974"],"SA":["Saudi Arabia","682","SA","SAU","Saudi Riyal","682","SAR","2","Halala","Saudi Riyals",".sa","1974"],"RS":["Serbia","688","RS","SRB","Serbian Dinar","941","RSD","2","Paras","Serbian Dinars",".rs","2006"],"SC":["Seychelles","690","SC","SYC","Seychelles Rupee","690","SCR","2","Cents","Seychelles Rupees",".sc","1974"],"SL":["Sierra Leone","694","SL","SLE","Leone","694","SLL","2","Cents","Leones",".sl","1974"],"SG":["Singapore","702","SG","SGP","Singapore Dollar","702","SGD","2","Cents","Singapore Dollars",".sg","1974"],"SB":["Solomon Islands","90","SB","SLB","Solomon Islands dollar","90","SBD","2","Cents","Sol.Isl.Dollars",".sb","1974"],"SO":["Somalia","706","SO","SOM","Somali Shilling","706","SOS","2","Senti","Somalian Shillings",".so","1974"],"ZA":["South Africa","710","ZA","ZAF","Rand","710","ZAR","2","Cents","Rand",".za","1974"],"ES":["Spain","724","ES","ESP","ESA","996","ESA","2","Céntimos","Bolívares Soberanos",".es","1974"],"LK":["Sri Lanka","144","LK","LKA","Sri Lanka Rupee","144","LKR","2","Cents","Lankan Rupee",".lk","1974"],"SD":["Sudan","729","SD","SDN","Sudanese Pound","938","SDG","2","Qirsh (Piastre)","Sudanese Pound",".sd","1974"],"SR":["Suriname","740","SR","SUR","Surinam Dollar","968","SRD","2","Cents","Surinam Dollars",".sr","1974"],"SZ":["Swaziland","748","SZ","SWZ","Lilangeni","748","SZL","2","Cents","Lilangeni",".sz","1974"],"SE":["Sweden","752","SE","SWE","Swedish Krona","752","SEK","2","Ore","Swedish Kronor",".se","1974"],"CH":["Switzerland","756","CH","CHE","Swiss Franc","756","CHF","2","Rappen","Swiss Francs",".ch","1974"],"TW":["Taiwan","158","TW","TWN","New Taiwan Dollar","901","TWD","2","Cents","Taiwan Dollars",".tw","1974"],"TJ":["Tajikistan","762","TJ","TJK","Somoni","972","TJS","2","Diram","Somoni",".tj","1992"],"TH":["Thailand","764","TH","THA","Baht","764","THB","2","Satang","Baht",".th","1974"],"TO":["Tonga","776","TO","TON","PaÃ¢â‚¬â„¢anga","776","TOP","2","Seniti","Paanga",".to","1974"],"TT":["Trinidad and Tobago","780","TT","TTO","Trinidad and Tobago Dollar","780","TTD","2","Cents","Trinidad and Tobago Dollars",".tt","1974"],"TN":["Tunisia","788","TN","TUN","Tunisian Dinar","788","TND","3","Millimes","Tunisian Dinars",".tn","1974"],"TR":["Turkey","792","TR","TUR","Turkish Lira","949","TRY","2","Kurus","Lira",".tr","1974"],"TM":["Turkmenistan","795","TM","TKM","Turkmenistan New Manat","934","TMT","2","Tenge","Manats",".tm","1992"],"UG":["Uganda","800","UG","UGA","Uganda Shilling","800","UGX","0","Cents","Ugandan Shillings",".ug","1974"],"UA":["Ukraine","804","UA","UKR","Hryvnia","980","UAH","2","Kopiyka","Hryvnia",".ua","1974"],"AE":["United Arab Emirates","784","AE","ARE","UAE Dirham","784","AED","2","Fils","UAE Dirhams",".ae","1974"],"GB":["United Kingdom","826","GB","GBR","Pound Sterling","826","GBP","2","Pence","Pounds",".gb(.uk)","1974"],"US":["United States","840","US","USA","US Dollar","840","USD","2","Cents","US Dollars",".us","1974"],"UY":["Uruguay","858","UY","URY","Peso Uruguayo","858","UYU","2","Centesimo","Pesos Uruguayos",".uy","1974"],"UZ":["Uzbekistan","860","UZ","UZB","Uzbekistan Sum","860","UZS","2","Tiyin","Som",".uz","1992"],"VU":["Vanuatu","548","VU","VUT","Vatu","548","VUV","0","","Vatu",".vu","1980"],"VN":["Viet Nam","704","VN","VNM","Dong","704","VND","0","Hao","Dong",".vn","1974"],"YE":["Yemen","887","YE","YE","Yemeni Rial","886","YER","2","Fils","Yemeni Rials",".ye","1974"],"ZM":["Zambia","894","ZM","ZMB","Zambian Kwacha","967","ZMW","2","Ngwee","Zambian Kwacha",".zm","1974"]}

// name 	The full name of the currency

let codes = Object.keys(currencyList);

function clean(code) {


    let code2 =  code.substring(0,3).toUpperCase()
    console.log(code2)
    let data = currencyList[code2];

    let named = {
        code: code2,
        demonym: data[0],        // demonym 	The adjective (demonym) of the curries
        majorSingle: [1],       // majorSingle 	The currency major unit name in singular form
        majorPlural: data[2],   // majorPlural 	The currency major unit name in plural form
        ISOnum: data[3],        // ISOnum 	The ISO 4217 number of the currency
        symbol: data[4],               // symbol 	The currency symbol in Latin form as most internationally used.
        symbolNative: data[5],               // symbolNative 	The currency symbol in native language form
        minorSingle: data[6],               // minorSingle 	The currency minor unit name in singular form
        minorPlural: data[7],               // minorPlural 	The currency minor unit name in plural form
        ISOdigits: data[8],               // ISOdigits 	The number of digits after the decimal separator in accordance with ISO 4217
        decimals: data[9],               // decimals 	The number of decimal places for the minor unit
        numToBasic: data[10],               // numToBasic 	The total number of minor units in a major unit


    }

    return named

}

function isValideCode(code) {

    return codes.includes(code);

}

// as per iso 4217 the first to digit of the currency code correspond to the iso 3166 alpha 2 code.
function findByIso2(iso2) {
    return codes.find(c => c.substring(0, 2) == iso2.toUpperCase())
}

function isIsoCode(code) {
    if(isValideCode(code)) {
        let data = currencyList[code]
        return data[3] != null;
    }
    else {
        return false
    }
}

function getRates(code, cb) {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    let code2 = code.substring(0,3).toUpperCase();
    if(!isIsoCode(code2)) {
        return "invalid code"
    }

     fetch("https://api.exchangerate-api.com/v4/latest/"+code2, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            if(typeof cb==="function") cb(result);
        })
        .catch((error) => console.error(error));

    return "fetching";
}

function demo (home, other, amt=10) {
    let myCode = "CAD"

    if(home.length == 2) home = findByIso2(home);
    if(other.length == 2) other = findByIso2(other)


    let test = getRates(home, (r)=>{

        let rates = r.rates;
        console.log(rates);

        let rate = rates[other];


        console.log(amt+ currencyList[home][4], " = ", amt*rate + currencyList[other][4] )


    })

    console.log(clean(home))
    console.log(test)

    let myLoc = "LAk"
}
// demo("LAK", "THB", 400000)

demo("ca", "us", 50)



