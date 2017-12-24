json.extract! event, :id, :home, :away, :title, :date, :time, :created_at, :updated_at
json.url event_url(event, format: :json)
