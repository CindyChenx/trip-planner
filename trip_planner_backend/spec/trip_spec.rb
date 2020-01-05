RSpec.describe 'GET /trips', type: :request do

    let(:user) { Fabricate(:user) }
    let(:user2) { Fabricate(:user) }
    let(:url) {'/login'}
    let(:params) do    
        {
            user: {
                email: user.email,
                password: user.password
            }
        }
    end
    let(:params2) do    
        {
            user: {
                email: user2.email,
                password: user2.password
            }
        }
    end

    context 'you must be authorized to perform any crud on trips' do
        it "doesn't allow any unauthorized requests to the trips controller" do
            get '/trips'
            expect(response.status).to eq 401
            get '/trips/1'
            expect(response.status).to eq 401
            post '/trips', params: { trip: {country: "China", length: 10, price: 2000, description: "Explore Asia"}}
            expect(response.status).to eq 401
            patch '/trips/1', params: { trip: {country: "China"}}
            expect(response.status).to eq 401
            delete '/trips/1'
            expect(response.status).to eq 401
        end
    end

    

end