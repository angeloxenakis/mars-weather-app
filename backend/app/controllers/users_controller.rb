class UsersController < ApplicationController

    def create

        ### WE CAN ADD MORE REGEX LATER IF WE WANT

        usernameFlag = User.find_by({ username: params[:username] })
        useremailFlag = User.find_by({ email: params[:email] })
        

        if(params[:username].chomp == "")
            usernameFlag = true
        end

        if(params[:email].chomp == "")
            useremailEmptyFlag = true
        end

        if(params[:password].chomp == "")
            userpasswordFlag = true
        end

        errorMessages = []

        if (usernameFlag || useremailFlag || userpasswordFlag)

            if(usernameFlag && params[:username].chomp == "")
                errorMessages << "Username Cannot Be Empty"
            else
                errorMessages << "Username Already Exists"
            end

            if(useremailEmptyFlag)
                errorMessages << "Email Cannot Be Empty"
            end
            
            if(useremailFlag)
                errorMessages << "Email Already In Use"
            end

            if(userpasswordFlag)
                errorMessages << "Please Enter A Valid Password"
            end

            render json: { success: false, id: nil , errors: errorMessages}
        else
            user = User.create({
                username: params[:username],
                password: params[:password],
                email: params[:email],
                city: params[:city],
                zipcode: params[:zipcode]

            })
            render json: { success: true, id: user.id, error: errorMessages}
        end
        # Just need to do the validations in regex 
        # because the ones I had before were GARBAGE
        # So I scrapped it and just started over again, but ultimately
        # Users can sign up and sign in right now
        # And it would be stored in our DB with their passwords hidden
    end

    def update
        user = User.find_by({id: params[:id]})

        user.update({zipcode: params[:zipcode], city: [:city]})
        render json: {success: true}
    end

end