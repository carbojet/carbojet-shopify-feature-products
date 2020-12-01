import {EmptyState, Layout, Page} from '@shopify/polaris'
const Index = () => {
    return(
        <Page>
            <Layout>
                <EmptyState
                    heading="Manage your inventory transfers"
                    action={{content: 'Add transfer'}}
                    secondaryAction={{content: 'Select Product'}}
                    image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
                >
                    <p>this is testing heroku shopify polaris</p>
                </EmptyState>
            </Layout>
        </Page>
    )
    
}

export default Index;