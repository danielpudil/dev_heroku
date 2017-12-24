json.extract! column, :id, :title, :image, :text, :created_at, :updated_at
json.url column_url(column, format: :json)
