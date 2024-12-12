// PPP: Purchasing Power Parity is the relitive index

//
// S=P1/P2
// where:
//     S= Exchange rate of currency 1 to currency 2
//     P1= Cost of good X in currency 1
//     P2= Cost of good X in currency 2
//
//
// Goods Selected: Bread Butter Beer
//
// Each MLB will bee sold in each contery for the sum of 1 loaf bread 100g of butter and 500ml beer.
//
//     the costs of these should be determined at the local supermarket
//


let bhk = `1.	Singapore		1,999.15 $
2.	Hong Kong (China)		1,581.82 $
3.	Switzerland		1,575.35 $
4.	Ireland		1,451.42 $
5.	United States		1,449.11 $
6.	Netherlands		1,182.87 $
7.	Canada		1,169.53 $
8.	United Arab Emirates		1,153.09 $
9.	Australia		1,120.05 $
10.	United Kingdom		1,088.23 $
11.	Qatar		994.97 $
12.	Israel		982.15 $
13.	New Zealand		888.97 $
14.	Norway		874.99 $
15.	Denmark		854.36 $
16.	Malta		846.60 $
17.	Portugal		793.07 $
18.	Cyprus		786.42 $
19.	Spain		770.20 $
20.	Belgium		760.65 $
21.	Austria		748.14 $
22.	Germany		709.48 $
23.	Finland		679.26 $
24.	Sweden		664.89 $
25.	Kuwait		640.65 $
26.	Czech Republic		636.41 $
27.	France		631.04 $
28.	El Salvador		616.55 $
29.	Italy		601.17 $
30.	Poland		595.93 $
31.	Bahrain		592.29 $
32.	Armenia		575.36 $
33.	Costa Rica		544.71 $
34.	Nigeria		529.28 $
35.	Cuba		521.80 $
36.	Slovakia		515.39 $
37.	Croatia		511.82 $
38.	Montenegro		491.62 $
39.	Estonia		471.25 $
40.	Lithuania		464.28 $
41.	Mexico		424.97 $
42.	Greece		416.26 $
43.	Turkey		412.98 $
44.	Uruguay		400.90 $
45.	Japan		392.75 $
46.	Georgia		391.39 $
47.	Moldova		386.00 $
48.	Hungary		382.00 $
49.	Saudi Arabia		375.98 $
50.	Serbia		370.31 $
51.	Chile		369.18 $
52.	South Africa		367.75 $
53.	Oman		364.00 $
54.	Uzbekistan		358.93 $
55.	Albania		357.58 $
56.	South Korea		334.97 $
57.	Bulgaria		334.36 $
58.	Taiwan		327.25 $
59.	Romania		326.60 $
60.	Mauritius		323.88 $
61.	Latvia		319.19 $
62.	Kazakhstan		311.61 $
63.	Argentina		301.69 $
64.	China		292.78 $
65.	Colombia		274.90 $
66.	Ecuador		272.35 $
67.	Peru		270.43 $
68.	Thailand		258.98 $
69.	Belarus		256.66 $
70.	Palestine		252.96 $
71.	Malaysia		252.21 $
72.	Russia		244.12 $
73.	Ukraine		241.41 $
74.	Azerbaijan		239.50 $
75.	Iran		237.79 $
76.	Vietnam		235.21 $
77.	Jordan		235.05 $
78.	Bolivia		234.14 $
79.	North Macedonia		230.22 $
80.	Bosnia And Herzegovina		209.25 $
81.	Iraq		208.89 $
82.	Brazil		208.59 $
83.	Venezuela		203.03 $
84.	Morocco		191.69 $
85.	Indonesia		174.23 $
86.	Philippines		167.68 $
87.	Sri Lanka		139.77 $
88.	Tunisia		139.24 $
89.	Kenya		134.34 $
90.	India		121.70 $
91.	Algeria		103.78 $
92.	Libya		98.74 $
93.	Egypt		91.61 $
94.	Nepal		77.09 $
95.	Pakistan		69.05 $
96.	Bangladesh		49.54 $`

//Rank	Country	Domestic Beer(0.5 liter bottle)
let beer = `1\tJordan\t4.86
2\tAustralia\t4.62
3\tOman\t4.04
4\tSingapore\t3.94
5\tNorway\t3.06
6\tFinland\t3.04
7\tNew Zealand\t2.99
8\tPalestine\t2.98
9\tIreland\t2.93
10\tCanada\t2.86
11\tBahrain\t2.84
12\tIsrael\t2.68
13\tMalaysia\t2.67
14\tUnited Kingdom\t2.61
15\tCosta Rica\t2.37
16\tUnited Arab Emirates\t2.36
17\tSwitzerland\t2.32
18\tFrance\t2.30
19\tMorocco\t2.27
20\tNepal\t2.22
21\tIndonesia\t2.21
22\tSouth Korea\t2.10
23\tUruguay\t2.08
24\tHong Kong (China)\t2.06
25\tKenya\t2.05
26\tCuba\t2.03
27\tJapan\t2.01
28\tSri Lanka\t1.99
29\tTurkey\t1.98
30\tUnited States\t1.90
31\tIndia\t1.88
32\tIraq\t1.86
33\tBolivia\t1.84
34\tSweden\t1.82
35\tGreece\t1.80
36\tEcuador\t1.76
37\tBelgium\t1.76
38\tDenmark\t1.75
39\tThailand\t1.73
40\tEstonia\t1.68
41\tCyprus\t1.66
42\tLatvia\t1.64
43\tItaly\t1.63
44\tPeru\t1.63
45\tMalta\t1.61
46\tAlgeria\t1.58
47\tTaiwan\t1.58
48\tArgentina\t1.56
49\tEl Salvador\t1.55
50\tMauritius\t1.52
51\tLithuania\t1.50
52\tMexico\t1.45
53\tCroatia\t1.44
54\tAlbania\t1.40
55\tChile\t1.39
56\tNetherlands\t1.37
57\tArmenia\t1.36
58\tSouth Africa\t1.35
59\tAzerbaijan\t1.34
60\tAustria\t1.33
61\tGeorgia\t1.33
62\tVenezuela\t1.25
63\tEgypt\t1.24
64\tPortugal\t1.19
65\tTunisia\t1.18
66\tMoldova\t1.15
67\tUzbekistan\t1.15
68\tSpain\t1.15
69\tPhilippines\t1.14
70\tBrazil\t1.08
71\tPoland\t1.05
72\tMontenegro\t1.05
73\tRomania\t1.03
74\tNorth Macedonia\t0.99
75\tSlovakia\t0.99
76\tBulgaria\t0.98
77\tColombia\t0.97
78\tHungary\t0.97
79\tGermany\t0.96
80\tKazakhstan\t0.87
81\tBelarus\t0.87
82\tNigeria\t0.87
83\tBosnia And Herzegovina\t0.86
84\tCzech Republic\t0.86
85\tVietnam\t0.83
86\tChina\t0.81
87\tUkraine\t0.80
88\tSerbia\t0.75
89\tRussia\t0.71
90\tIran\t-
91\tLibya\t-
92\tSaudi Arabia\t-
93\tPakistan\t-
94\tQatar\t-
95\tKuwait\t-
96\tBangladesh\t-`

let bread = `1.\tSwitzerland\t\t3.67 $
2.\tUnited States\t\t3.61 $
3.\tDenmark\t\t3.15 $
4.\tCosta Rica\t\t3.08 $
5.\tNorway\t\t3.00 $
6.\tSouth Korea\t\t2.96 $
7.\tAustria\t\t2.71 $
8.\tSweden\t\t2.65 $
9.\tIsrael\t\t2.63 $
10.\tCanada\t\t2.60 $
11.\tFinland\t\t2.58 $
12.\tUruguay\t\t2.48 $
13.\tMexico\t\t2.41 $
14.\tAustralia\t\t2.40 $
15.\tPeru\t\t2.31 $
16.\tHong Kong (China)\t\t2.30 $
17.\tBelgium\t\t2.19 $
18.\tSingapore\t\t2.14 $
19.\tItaly\t\t2.11 $
20.\tEl Salvador\t\t2.02 $
21.\tGermany\t\t2.01 $
22.\tArgentina\t\t1.91 $
23.\tIreland\t\t1.91 $
24.\tFrance\t\t1.90 $
25.\tNew Zealand\t\t1.87 $
26.\tNetherlands\t\t1.85 $
27.\tTaiwan\t\t1.85 $
28.\tVenezuela\t\t1.84 $
29.\tCyprus\t\t1.82 $
30.\tChina\t\t1.64 $
31.\tEcuador\t\t1.63 $
32.\tUnited Kingdom\t\t1.58 $
33.\tLithuania\t\t1.57 $
34.\tQatar\t\t1.56 $
35.\tJapan\t\t1.50 $
36.\tBahrain\t\t1.48 $
37.\tChile\t\t1.48 $
38.\tLatvia\t\t1.47 $
39.\tSlovakia\t\t1.46 $
40.\tCroatia\t\t1.45 $
41.\tPortugal\t\t1.43 $
42.\tCzech Republic\t\t1.39 $
43.\tSpain\t\t1.38 $
44.\tBrazil\t\t1.37 $
45.\tUnited Arab Emirates\t\t1.36 $
46.\tHungary\t\t1.35 $
47.\tThailand\t\t1.35 $
48.\tGreece\t\t1.35 $
49.\tNigeria\t\t1.34 $
50.\tColombia\t\t1.32 $
51.\tEstonia\t\t1.25 $
52.\tPhilippines\t\t1.22 $
53.\tMalta\t\t1.21 $
54.\tBolivia\t\t1.21 $
55.\tPoland\t\t1.21 $
56.\tCuba\t\t1.20 $
57.\tIndonesia\t\t1.19 $
58.\tOman\t\t1.15 $
59.\tRomania\t\t1.13 $
60.\tKuwait\t\t1.10 $
61.\tSaudi Arabia\t\t1.03 $
62.\tBulgaria\t\t0.99 $
63.\tBosnia And Herzegovina\t\t0.99 $
64.\tSouth Africa\t\t0.99 $
65.\tTurkey\t\t0.98 $
66.\tVietnam\t\t0.96 $
67.\tPalestine\t\t0.94 $
68.\tAlbania\t\t0.92 $
69.\tMontenegro\t\t0.91 $
70.\tMalaysia\t\t0.89 $
71.\tIraq\t\t0.84 $
72.\tArmenia\t\t0.82 $
73.\tSerbia\t\t0.76 $
74.\tMauritius\t\t0.71 $
75.\tNorth Macedonia\t\t0.68 $
76.\tUkraine\t\t0.63 $
77.\tEgypt\t\t0.62 $
78.\tBangladesh\t\t0.61 $
79.\tSri Lanka\t\t0.61 $
80.\tPakistan\t\t0.60 $
81.\tGeorgia\t\t0.59 $
82.\tBelarus\t\t0.56 $
83.\tKenya\t\t0.53 $
84.\tIran\t\t0.51 $
85.\tMoldova\t\t0.51 $
86.\tJordan\t\t0.50 $
87.\tIndia\t\t0.50 $
88.\tNepal\t\t0.50 $
89.\tRussia\t\t0.47 $
90.\tUzbekistan\t\t0.47 $
91.\tMorocco\t\t0.47 $
92.\tKazakhstan\t\t0.47 $
93.\tAzerbaijan\t\t0.43 $
94.\tLibya\t\t0.30 $
95.\tTunisia\t\t0.16 $
96.\tAlgeria\t\t0.14 $`


beer2 = beer.split("\n")
beer3 = beer2.map(b => {
    let a = b.split("\t")
    return [parseInt(a[0]), a[1], parseFloat(a[2])]
})

console.log(beer3);


bhk2 = bhk.split("\n");
bhk3 = bhk2.map(b => {
    // let a = b.split("\t");
    let a = b.split(/\s+/);

    return [parseInt(a[0]), a[1], parseFloat(a[2])];
})
console.log(bhk3);


bread2 = bread.split("\n");
bread3 = bread2.map(b => {
    let a = b.split("\t");
    return [parseInt(a[0]), a[1], parseFloat(a[3])];
})
console.log(bread3);

// let bbb =

//todo

let keymap = [
    ...bread3.map(b => b[1]),
    ...beer3.map(b => b[1]),
    ...bhk3.map(b => b[1])

]


let keys = Array.from(new Set(keymap));

console.log(keys.length);