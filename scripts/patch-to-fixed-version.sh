git clone -b master https://github.com/MyAeroCode/nest.git
cd nest
npm i
npm run build
cd ..
cp -rf nest/node_modules/@nestjs ./node_modules/ 
rm -rf nest