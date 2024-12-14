# saas-base

#testing the two app at the same time
cd nx-react-vite
nx run-many --target=test --all

#serving back 
nx serve api

#serving front
nx serve nx-react-vite
