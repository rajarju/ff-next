import React from 'react'
import Head from 'next/head'
import { SSRProvider, Provider, defaultTheme, Grid, View, Heading } from '@adobe/react-spectrum'
import SideBar from '../components/SideBar'
import '../index.css'

function defaultTemplate(props) {
  return (
    <SSRProvider>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <meta name="theme-color" content="#333333" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>cnadev</title>
      </Head>
      <Provider theme={defaultTheme} colorScheme={`light`}>
        <Grid
          areas={['sidebar content']}
          columns={['256px', '3fr']}
          rows={['auto']}
          height='100vh'
          gap='size-100'
        >
          <View
            gridArea='sidebar'
            backgroundColor='gray-200'
            padding='size-200'
          >
            <SideBar></SideBar>
          </View>
          <View gridArea='content' padding='size-200'>
            <View width='size-6000'>
              {props.children}
            </View>
          </View>
        </Grid>
      </Provider>
    </SSRProvider>
  )
}

export default defaultTemplate