# require 'net/http'

class GetMarsDataJob < ApplicationJob
    after_perform do |job|
        # invoke another job at your time of choice 
        self.class.set(:wait => 5.seconds).perform_later
    end
  
    def perform
    end
  end