# Newsletter generator

Generator for simply creating standart newsletter layout

## Requirements and preparation

All you need to use it:

- check that **node.js** is installed in your system (it was created with node 8.11). If it's not then [download](https://nodejs.org/en/) and install
- print `npm i` in **cli** to install dependensies
- create and put one or more **.xml** files into **./xml/** folder

## How to create xml to use it as source

Just look in **./xml/example.xml** that is distributed with this project.

Use `<meta><filename>outputFileName</filename>...</meta>` to specify name of output **.html** file.

Use `<meta><date>2018-08-21</date>...</meta>` to specify date of newsletter. Format is stricted to this pattern **2018-08-21**.

There are several types of section (`<type>wide</type>`) that the generator can undestand:

- `wide` - for a full width block of news or something else

  It can be with or without button `<button>...</button>`,
  and text can be aligned to left `<textAlign>left</textAlign>` or center (by default).

- `half` - for a half divided block of news with a picture on the left or on the right

  The picture will be on the left if you specify `<imagePosition>left</imagePosition>` (by default),
  or on the right if you specify `<imagePosition>right</imagePosition>`.

  It's strongly recommended to specify dimentions `<width>300</width>` (**300** is a half of full width) and `height>320</height>`. Otherwise there will be some white spaces.

  Also don't forget to specify an alternative title `<alt>Alternative title</alt>` to avoid other web-developers rage.

- `yammer` - for Yammer group announcement block

  Actually it's almost the same as `wide`, but a little bit simpler. So you also can use wide instead of it.

- `event` - for event announcement

- `quote` - for a quote of significant person

  It's great to see your name (`<author><name>Your Name</name>...</author>`) in this block, isn't it? :)

## How to launch this ... and get .html already

There are several variants to launch the generator from **cli**. Here they are:

- `node generator --input=example` - the generator will seek for a file **./xml/example.xml** and generate one corresponding **.html** file and put it into a folder **./html/**
- `node generator --all` - the generator will take all **.xml** files in folder **./xml/** and generate corresponding count of **.html** files and put them into a folder **./html/**
- `node generator` (without options) - the generator will take the first **.xml** file in a folder **./xml/** and generate one corresponding **.html** file and put it into a folder **./html/**

That's all!
