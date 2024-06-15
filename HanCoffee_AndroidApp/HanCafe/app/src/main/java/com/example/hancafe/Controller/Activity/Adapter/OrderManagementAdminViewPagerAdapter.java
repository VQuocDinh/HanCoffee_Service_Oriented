package com.example.hancafe.Controller.Activity.Adapter;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.viewpager2.adapter.FragmentStateAdapter;

import com.example.hancafe.Controller.Activity.Admin.Order.Management.CancelOrderFragment;
import com.example.hancafe.Controller.Activity.Admin.Order.Management.CompleteOrderFragment;
import com.example.hancafe.Controller.Activity.Admin.Order.Management.ConfirmOrderFragment;
import com.example.hancafe.Controller.Activity.Admin.Order.Management.DeliveryOrderFragment;
import com.example.hancafe.Controller.Activity.Admin.OrderAdminFragment;

public class OrderManagementAdminViewPagerAdapter extends FragmentStateAdapter {

    public OrderManagementAdminViewPagerAdapter(@NonNull OrderAdminFragment fragmentActivity) {
        super(fragmentActivity);
    }

    @NonNull
    @Override
    public Fragment createFragment(int position) {
        switch (position){
            case 0:
                return new ConfirmOrderFragment();
            case 1:
                return new DeliveryOrderFragment();
            case 2:
                return new CompleteOrderFragment();
            case 3:
                return new CancelOrderFragment();
            default:
                return new ConfirmOrderFragment();
        }

    }


    @Override
    public int getItemCount() {
        return 4;
    }
}