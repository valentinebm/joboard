class ChangeStripName < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :strip_id, :stripe_id
  end
end
